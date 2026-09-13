# -*- coding: utf-8 -*-
"""
Convierte las copias de `figma/` en los datos del plugin de Figma.

El plugin (`figma-plugin/`) reconstruye el prototipo dentro de Figma: cuadros
editables con auto-layout, estilos de texto y color, y las interacciones
(pestañas, cambio de rol, guardar, pedir más tiempo) ya conectadas.

Para que esa reconstrucción no sea una transcripción a mano —que se desincroniza
en cuanto cambie una coma—, este script lee los archivos estáticos de `figma/`
(que a su vez se generan desde `index.html`) y escribe `figma-plugin/datos.js`
con un árbol de bloques por pantalla.

Uso:  python tools/html_a_figma.py
"""

import json
import pathlib
import re
import sys
from html.parser import HTMLParser

RAIZ = pathlib.Path(__file__).resolve().parent.parent
FIGMA = RAIZ / "figma"
SALIDA = RAIZ / "figma-plugin" / "datos.js"

IGNORADAS = {"script", "style", "template", "noscript", "head", "meta", "title",
             "link", "br", "img", "input", "hr"}
VACIAS = {"meta", "link", "br", "img", "input", "hr", "source"}

# estilos: clase del HTML → estilo del plugin. El orden importa: las variantes
# (time-state--paused) van antes que su clase base.
ESTILOS = [
    ("brand-meta", "brand-meta"),
    ("brand", "brand"),
    ("time-state--paused", "time-state-pausado"),
    ("time-state", "time-state"),
    ("time-figure", "time-figure"),
    ("group-name", "group-name"),
    ("group-marks", "p"),
    ("route-num", "route-num"),
    ("step-index", "step-index"),
    ("record-marks", "record-marks"),
    ("field-title", "field-title"),
    ("answer", "answer"),
    ("lead", "lead"),
    ("note", "note"),
    ("meta", "meta"),
    ("num", "num"),
    ("plain", "plain"),
]

MONO = {"mark", "num", "meta"}
NEGRITA = {"strong", "b"}
# etiquetas que no rompen una línea de texto: si un nodo solo tiene estas, es
# una hoja (un texto), no un contenedor que haya que recorrer
EN_LINEA = {"span", "strong", "b", "em", "i", "a", "code", "small", "u", "sub", "sup"}
AVISOS = []


class Nodo:
    def __init__(self, etiqueta, atributos):
        self.etiqueta = etiqueta
        self.atributos = atributos
        self.hijos = []

    @property
    def clases(self):
        return (self.atributos.get("class") or "").split()

    def tiene(self, clase):
        return clase in self.clases

    def oculto(self):
        return "hidden" in self.atributos

    def recorrer(self):
        for hijo in self.hijos:
            if isinstance(hijo, Nodo):
                yield hijo
                yield from hijo.recorrer()

    def propios(self, *clases):
        elementos = [h for h in self.hijos if isinstance(h, Nodo)]
        if not clases:
            return elementos
        return [e for e in elementos if any(e.tiene(c) for c in clases)]

    def busca(self, *clases):
        for hijo in self.recorrer():
            if any(hijo.tiene(c) for c in clases):
                return hijo
        return None

    def etiqueta_hijo(self, *etiquetas):
        for hijo in self.recorrer():
            if hijo.etiqueta in etiquetas:
                return hijo
        return None

    def acciones(self):
        return {a: v for a, v in self.atributos.items() if a.startswith("data-")}


class Arbol(HTMLParser):
    """Constructor de árbol mínimo: el HTML de estas copias es regular."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.raiz = Nodo("documento", {})
        self.pila = [self.raiz]

    def handle_starttag(self, etiqueta, atributos):
        nodo = Nodo(etiqueta, {k: (v if v is not None else "") for k, v in atributos})
        self.pila[-1].hijos.append(nodo)
        if etiqueta not in VACIAS:
            self.pila.append(nodo)

    def handle_endtag(self, etiqueta):
        for i in range(len(self.pila) - 1, 0, -1):
            if self.pila[i].etiqueta == etiqueta:
                del self.pila[i:]
                return

    def handle_data(self, datos):
        self.pila[-1].hijos.append(datos)


def avisar(mensaje):
    AVISOS.append(mensaje)


# ── texto: tramos, para conservar lo monoespaciado y la negrita ────────────

def tramos(nodo, mono=False, negrita=False):
    salida = []
    for hijo in nodo.hijos:
        if isinstance(hijo, str):
            salida.append((hijo, mono, negrita))
        elif hijo.oculto() or hijo.etiqueta in IGNORADAS:
            continue
        else:
            salida.extend(tramos(hijo,
                                 mono or any(hijo.tiene(c) for c in MONO),
                                 negrita or hijo.etiqueta in NEGRITA))
    return salida


def compactar(partes):
    limpio = []
    for texto, mono, negrita in partes:
        texto = re.sub(r"\s+", " ", texto)
        if not texto:
            continue
        if limpio and limpio[-1][1] == mono and limpio[-1][2] == negrita:
            limpio[-1][0] += texto
        else:
            limpio.append([texto, mono, negrita])
    if not limpio:
        return []
    limpio[0][0] = limpio[0][0].lstrip()
    limpio[-1][0] = limpio[-1][0].rstrip()
    return [{"texto": t, "mono": m, "negrita": n} for t, m, n in limpio if t.strip()]


def runs(nodo):
    return compactar(tramos(nodo))


def plano(nodo):
    return "".join(t for t, _, _ in tramos(nodo)).strip()


def estilo_de(nodo):
    for clase, estilo in ESTILOS:
        if nodo.tiene(clase):
            return estilo
    return {"h1": "h1", "h2": "h2", "h3": "h3"}.get(nodo.etiqueta, "p")


# ── piezas del documento ──────────────────────────────────────────────────

def badges(nodo):
    salida = []
    for hijo in nodo.recorrer():
        if not hijo.tiene("badge"):
            continue
        variante = [c for c in hijo.clases if c.startswith("badge--")]
        salida.append({"k": variante[0].replace("badge--", "") if variante else "todo",
                       "runs": runs(hijo)})
    return salida


def solo_badges(nodo):
    """¿El contenedor es una fila de badges y nada más? El texto de los propios
    badges no cuenta: solo cuenta lo que está fuera de ellos."""
    if not badges(nodo):
        return False

    def fuera_de_badges(n):
        salida = []
        for hijo in n.hijos:
            if isinstance(hijo, str):
                salida.append(hijo)
            elif hijo.tiene("badge") or hijo.oculto():
                continue
            else:
                salida.extend(fuera_de_badges(hijo))
        return salida

    return not "".join(fuera_de_badges(nodo)).strip()


def es_hoja(nodo):
    """¿Es un texto con formato, y no un contenedor que haya que recorrer?"""
    return all(h.etiqueta in EN_LINEA for h in nodo.propios())


def boton(nodo):
    if nodo.tiene("btn--primary"):
        k = "primary"
    elif nodo.tiene("btn--secondary"):
        k = "secondary"
    elif nodo.tiene("btn--option"):
        k = "option"
    elif nodo.tiene("btn--quiet"):
        k = "quiet"
    elif nodo.tiene("tab"):
        k = "tab"
    else:
        k = "switch"
    return {"t": "boton", "k": k, "runs": runs(nodo), "acciones": nodo.acciones()}


def botones(contenedor):
    """Los botones de un contenedor, aunque vengan envueltos en otro div
    (el caso de `div.actions` dentro de una fila de grupo)."""
    return [boton(b) for b in contenedor.recorrer()
            if b.tiene("btn") or b.tiene("switch-btn") or b.tiene("tab")]


def mapear_conmutador(nodo):
    return [{"runs": runs(b), "activo": b.atributos.get("aria-pressed") == "true",
             "acciones": b.acciones()} for b in nodo.propios("switch-btn")]


def mapear_campo(nodo):
    campo = {"t": "campo"}
    rotulo = nodo.busca("field-title") or next(
        (h for h in nodo.propios("label", "legend")), None)
    if rotulo is not None:
        campo["runs"] = runs(rotulo)
    caja = nodo.etiqueta_hijo("textarea", "input")
    if caja is not None:
        campo["caja"] = runs(caja)
    nota = nodo.busca("note")
    if nota is not None:
        campo["nota"] = runs(nota)
    conmutador = nodo.busca("switch")
    if conmutador is not None:
        campo["conmutador"] = mapear_conmutador(conmutador)
    return campo


def mapear_ruta(nodo):
    items = []
    for li in nodo.propios("route-item"):
        h3 = li.etiqueta_hijo("h3")
        motivo = li.busca("reason")
        items.append({
            "num": runs(li.busca("route-num")) if li.busca("route-num") else [],
            "titulo": runs(h3) if h3 is not None else [],
            "badges": badges(li),
            "nota": runs(li.busca("note")) if li.busca("note") else [],
            "bloqueado": li.tiene("route-item--blocked"),
            "motivo": runs(motivo.propios("p")[0]) if motivo and motivo.propios("p") else [],
        })
    return {"t": "ruta", "items": items}


def mapear_grupo(nodo):
    filas = []
    for li in nodo.propios("group-row"):
        marcas = li.busca("group-marks") or li
        notas = li.propios("record-marks") or li.propios("note")
        filas.append({
            "nombre": runs(li.busca("group-name")) if li.busca("group-name") else [],
            "badges": badges(marcas),
            "notas": [runs(n) for n in notas],
            "propia": li.tiene("group-row--self"),
            "botones": botones(li),
        })
    return {"t": "grupo", "filas": filas}


def mapear_pasos(nodo):
    items = []
    for li in nodo.propios("step"):
        h2 = li.etiqueta_hijo("h2")
        items.append({
            "indice": plano(li.busca("step-index")) if li.busca("step-index") else "",
            "titulo": runs(h2) if h2 is not None else [],
            "nota": runs(li.busca("note")) if li.busca("note") else [],
            "badges": badges(li),
            "marca": "done" if li.tiene("step--done") else
                     "wait" if li.tiene("step--wait") else "todo",
        })
    return {"t": "pasos", "items": items}


def mapear_registros(nodo):
    items = []
    for li in nodo.propios("record"):
        marcas = li.propios("record-marks")
        items.append({
            "badges": badges(li),
            "notas": [runs(m) for m in marcas] or [runs(n) for n in li.propios("note")],
        })
    return {"t": "registros", "items": items}


def mapear_hechos(nodo):
    items = []
    for div in nodo.propios("fact"):
        dt, dd = div.etiqueta_hijo("dt"), div.etiqueta_hijo("dd")
        items.append({
            "dt": runs(dt) if dt is not None else [],
            "dd": runs(dd) if dd is not None else [],
            "plano": dd is not None and dd.tiene("plain"),
        })
    return {"t": "hechos", "items": items}


def mapear_barra(nodo):
    relleno = nodo.busca("bar-fill")
    pct = 0.0
    if relleno is not None:
        encontrado = re.search(r"--valor:\s*([\d.]+)%", relleno.atributos.get("style", ""))
        if encontrado:
            pct = float(encontrado.group(1))
    return {"t": "barra", "pct": pct, "baja": nodo.tiene("bar--low")}


def mapear_bloque(nodo):
    if nodo.oculto() or nodo.etiqueta in IGNORADAS:
        return []

    if nodo.tiene("route"):
        return [mapear_ruta(nodo)]
    if nodo.tiene("steps"):
        return [mapear_pasos(nodo)]
    if nodo.tiene("records"):
        return [mapear_registros(nodo)]
    if nodo.tiene("facts"):
        return [mapear_hechos(nodo)]
    if nodo.tiene("group") and not nodo.tiene("group-name"):
        return [mapear_grupo(nodo)]
    if nodo.tiene("bar"):
        return [mapear_barra(nodo)]
    if nodo.etiqueta == "fieldset" or nodo.tiene("field"):
        return [mapear_campo(nodo)]
    if nodo.tiene("actions") or nodo.tiene("motives") or nodo.tiene("switch"):
        return botones(nodo)
    if nodo.tiene("band"):
        hijos = []
        for hijo in nodo.propios():
            hijos.extend(mapear_bloque(hijo))
        return [{"t": "banda", "id": nodo.atributos.get("id", ""),
                 "respuesta": nodo.tiene("answer"), "hijos": hijos}]
    if nodo.etiqueta in {"footer", "nav"} or nodo.tiene("foot") or nodo.tiene("tabs"):
        return []

    if solo_badges(nodo):
        return [{"t": "marcas", "badges": badges(nodo)}]

    if es_hoja(nodo):
        if badges(nodo) and plano(nodo):
            avisar("bloque mixto (texto + badges): %r" % plano(nodo)[:70])
            return [{"t": "marcas", "badges": badges(nodo)},
                    {"t": "texto", "estilo": estilo_de(nodo), "runs": runs(nodo)}]
        if badges(nodo):
            return [{"t": "marcas", "badges": badges(nodo)}]
        if plano(nodo):
            return [{"t": "texto", "estilo": estilo_de(nodo), "runs": runs(nodo)}]
        return []

    salida = []
    for hijo in nodo.propios():
        salida.extend(mapear_bloque(hijo))
    return salida


def paleta(html_texto):
    """Los colores del sistema, tal como los documenta el propio CSS.

    El comentario de `theme.css` lista el valor hexadecimal calculado de cada
    token (incluidos los derivados con color-mix). Se leen de ahí para no
    duplicar números a mano: si cambia el tema, cambia el plugin."""
    encontrados = dict(re.findall(r'--([a-z0-9-]+)\s+(#[0-9A-Fa-f]{6})', html_texto))
    nombres = {
        "bg": "bg", "surface-1": "surface1", "surface-2": "surface2", "fg": "fg",
        "muted": "muted", "accent": "accent", "signal": "signal", "done": "done",
        "on-solid": "onSolid", "signal-tint": "signalTint", "signal-ink": "signalInk",
        "accent-strong": "accentStrong",
    }
    salida = {}
    for token, clave in nombres.items():
        if token not in encontrados:
            sys.exit("no encontré el token --%s en el CSS de las copias" % token)
        salida[clave] = encontrados[token]
    return salida


def leer_pantalla(ruta, meta):
    arbol = Arbol()
    arbol.feed(ruta.read_text(encoding="utf-8"))
    arbol.close()

    seccion = next((n for n in arbol.raiz.recorrer() if n.tiene("screen")), None)
    if seccion is None:
        sys.exit("no encontré la pantalla en %s" % ruta)
    cabecera = next((n for n in arbol.raiz.recorrer() if n.tiene("topbar")), None)
    pie = next((n for n in arbol.raiz.recorrer() if n.tiene("foot")), None)
    tabs = next((n for n in arbol.raiz.recorrer() if n.tiene("tabs")), None)

    contenido = []
    for nodo in (seccion.busca("stack") or seccion).propios():
        bloques = mapear_bloque(nodo)
        # cada hijo de .stack es un bloque del documento: en Figma se agrupa para
        # que la separación entre bloques (48 px) sea distinta de la de dentro
        if bloques:
            contenido.append({"t": "capa", "hijos": bloques})

    return {
        "id": meta["id"],
        "archivo": meta["archivo"],
        "titulo": meta["titulo"],
        "rol": meta["rol"],
        "pestana": meta["pestana"],
        "contenido": contenido,
        "cabecera": {
            "marca": runs(cabecera.busca("brand")) if cabecera else [],
            "meta": runs(cabecera.busca("brand-meta")) if cabecera else [],
            "roles": mapear_conmutador(cabecera.busca("switch")) if cabecera else [],
        },
        "tabs": [{"runs": runs(b), "activo": b.atributos.get("aria-current") == "page",
                  "acciones": b.acciones()} for b in (tabs.propios("tab") if tabs else [])],
        "pie": {
            "nota": runs(pie.busca("note")) if pie else [],
            "boton": boton(pie.propios("btn")[0]) if pie and pie.propios("btn") else None,
        },
    }


PANTALLAS = [
    ("01-entrega-estudiante.html", "entrega-estudiante", "Entrega · estudiante", "estudiante", "entrega"),
    ("02-entrega-docente.html", "entrega-docente", "Entrega · docente", "docente", "entrega"),
    ("03-curso-estudiante.html", "curso-estudiante", "Curso · estudiante", "estudiante", "curso"),
    ("04-curso-docente.html", "curso-docente", "Curso · docente", "docente", "curso"),
    ("05-tiempo-estudiante.html", "tiempo-estudiante", "Tiempo · estudiante", "estudiante", "tiempo"),
    ("06-tiempo-docente.html", "tiempo-docente", "Tiempo · docente", "docente", "tiempo"),
    ("07-flujo-estudiante.html", "flujo-estudiante", "Flujo · estudiante", "estudiante", "flujo"),
    ("08-flujo-docente.html", "flujo-docente", "Flujo · docente", "docente", "flujo"),
]

ESTADOS = [
    ("entrega-estudiante-guardado-sin-senal.html", "entrega-estudiante-guardado-sin-senal",
     "Entrega · estudiante · guardado sin señal", "estudiante", "entrega"),
    ("entrega-estudiante-entregado-dos-marcas.html", "entrega-estudiante-entregado-dos-marcas",
     "Entrega · estudiante · entregado con las dos marcas", "estudiante", "entrega"),
    ("tiempo-estudiante-motivos-abierto.html", "tiempo-estudiante-motivos-abierto",
     "Tiempo · estudiante · pedir más tiempo", "estudiante", "tiempo"),
    ("tiempo-estudiante-solicitud-resuelta.html", "tiempo-estudiante-solicitud-resuelta",
     "Tiempo · estudiante · resuelta al instante", "estudiante", "tiempo"),
    ("tiempo-estudiante-tiempo-agotado.html", "tiempo-estudiante-tiempo-agotado",
     "Tiempo · estudiante · sin tiempo", "estudiante", "tiempo"),
    ("flujo-estudiante-guardado-sin-subir.html", "flujo-estudiante-guardado-sin-subir",
     "Flujo · estudiante · guardado sin subir", "estudiante", "flujo"),
    ("flujo-estudiante-subido.html", "flujo-estudiante-subido",
     "Flujo · estudiante · las dos marcas", "estudiante", "flujo"),
    ("tiempo-docente-solicitud-resuelta.html", "tiempo-docente-solicitud-resuelta",
     "Tiempo · docente · resuelta por ti", "docente", "tiempo"),
]


def main():
    def recoger(tabla, carpeta):
        salida = []
        for archivo, ident, titulo, rol, pestana in tabla:
            ruta = carpeta / archivo
            if not ruta.exists():
                sys.exit("falta %s: ejecuta antes tools/build_figma_export.py" % ruta)
            salida.append(leer_pantalla(ruta, {
                "archivo": archivo, "id": ident, "titulo": titulo, "rol": rol,
                "pestana": pestana}))
        return salida

    pantallas = recoger(PANTALLAS, FIGMA)
    estados = recoger(ESTADOS, FIGMA / "estados")

    SALIDA.parent.mkdir(exist_ok=True)
    SALIDA.write_text(
        "// GENERADO por tools/html_a_figma.py desde figma/*.html — no editar a mano.\n"
        "const DATOS = " + json.dumps({
            "paleta": paleta((FIGMA / PANTALLAS[0][0]).read_text(encoding="utf-8")),
            "pantallas": pantallas,
            "estados": estados,
        }, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8", newline="\n")

    bloques = sum(len(p["contenido"]) for p in pantallas + estados)
    print("%d pantallas + %d estados → %s" % (len(pantallas), len(estados), SALIDA))
    print("%d bloques de contenido, %d avisos" % (bloques, len(AVISOS)))
    for aviso in sorted(set(AVISOS)):
        print("  aviso:", aviso)


if __name__ == "__main__":
    main()
