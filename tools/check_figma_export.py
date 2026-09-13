# -*- coding: utf-8 -*-
"""
Revisa las copias de `figma/` antes de subirlas.

No mira si el diseño es bonito: mira lo que rompe una importación a Figma —
un HTML mal cerrado, una pantalla que sigue oculta, dos pantallas mezcladas,
JavaScript a medias o un archivo sin la fuente incrustada.

Uso:  python tools/check_figma_export.py
"""

import pathlib
import re
import sys
from html.parser import HTMLParser

RAIZ = pathlib.Path(__file__).resolve().parent.parent
FIGMA = RAIZ / "figma"

VACIOS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link",
          "meta", "param", "source", "track", "wbr"}


class Estructura(HTMLParser):
    """Árbol mínimo para comprobar el cierre de etiquetas."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.pila = []
        self.errores = []
        self.huecos = []
        self.cuenta = {}
        self.atributos = []

    def handle_starttag(self, etiqueta, atributos):
        self.cuenta[etiqueta] = self.cuenta.get(etiqueta, 0) + 1
        self.atributos.append((etiqueta, dict(atributos)))
        if etiqueta not in VACIOS:
            self.pila.append(etiqueta)

    def handle_startendtag(self, etiqueta, atributos):
        self.cuenta[etiqueta] = self.cuenta.get(etiqueta, 0) + 1
        self.atributos.append((etiqueta, dict(atributos)))

    def handle_endtag(self, etiqueta):
        if etiqueta in VACIOS:
            return
        if not self.pila:
            self.errores.append("</%s> sin apertura" % etiqueta)
            return
        if self.pila[-1] != etiqueta:
            self.errores.append("</%s> cierra a <%s>" % (etiqueta, self.pila[-1]))
            return
        self.pila.pop()


def atributos_de(parser, etiqueta, atributo=None, valor=None):
    salida = []
    for et, at in parser.atributos:
        if et != etiqueta:
            continue
        if atributo and atributo not in at:
            continue
        if valor is not None and at.get(atributo) != valor:
            continue
        salida.append(at)
    return salida


def revisar(ruta, es_catalogo=False):
    texto = ruta.read_text(encoding="utf-8")
    parser = Estructura()
    parser.feed(texto)
    parser.close()

    fallos = []

    def check(nombre, condicion, detalle=""):
        if not condicion:
            fallos.append("%s%s" % (nombre, (" (%s)" % detalle) if detalle else ""))

    def clases():
        for _, at in parser.atributos:
            for c in (at.get("class") or "").split():
                yield c

    check("etiquetas balanceadas", not parser.errores and not parser.pila,
          "; ".join(parser.errores + ["<%s> sin cerrar" % e for e in parser.pila]))
    check("tiene doctype", texto.lstrip().lower().startswith("<!doctype html>"))
    check("sin <script>", "<script" not in texto.lower())
    check("sin <template>", "<template" not in texto.lower())
    check("sin <noscript>", "<noscript" not in texto.lower())
    check("sin capas sr-only", "sr-only" not in set(clases()))
    check("fuente incrustada", "data:font/woff2;base64" in texto)
    check("ancho de diseño fijo", "--shell: 500px" in texto and "body { width: var(--shell)" in texto)
    check("llaves CSS cuadradas", texto.count("{") == texto.count("}"),
          "%d { y %d }" % (texto.count("{"), texto.count("}")))
    check("sin recursos externos", not re.search(r'(src|href)="https?://', texto))

    if es_catalogo:
        check("catálogo con enlaces a las pantallas",
              len(re.findall(r'class="link"', texto)) >= 16,
              "%d enlaces" % len(re.findall(r'class="link"', texto)))
        return fallos

    secciones = atributos_de(parser, "section", "class", "screen")
    check("una sola pantalla", len(secciones) == 1, "%d secciones" % len(secciones))
    if len(secciones) == 1:
        seccion = secciones[0]
        check("pantalla visible", "hidden" not in seccion, "la sección sigue oculta")
        check("pantalla con id", "id" in seccion)

    actuales = atributos_de(parser, "button", "aria-current", "page")
    check("una sola pestaña marcada", len(actuales) == 1, "%d pestañas activas" % len(actuales))

    # los botones de rol son los únicos que declaran data-rol: en la pantalla
    # «Entrega» el conmutador de conexión también tiene uno pulsado, y es correcto
    roles = [a for a in parser.atributos
             if a[0] == "button" and "data-rol" in a[1]]
    pulsados = [a for _, a in roles if a.get("aria-pressed") == "true"]
    check("dos roles declarados", len(roles) == 2, "%d botones de rol" % len(roles))
    check("un solo rol activo", len(pulsados) == 1, "%d roles pulsados" % len(pulsados))

    # coherencia entre el nombre del archivo, la pantalla, el rol y la pestaña
    if len(secciones) == 1 and len(actuales) == 1 and len(pulsados) == 1:
        seccion = secciones[0]
        pestana = actuales[0].get("data-pantalla")
        rol = pulsados[0].get("data-rol")
        nombre = ruta.stem
        check("rol coherente con el archivo",
              (rol == "docente") == ("docente" in nombre) == seccion["id"].endswith("-docente"),
              "archivo=%s rol=%s sección=%s" % (nombre, rol, seccion["id"]))
        check("pestaña coherente con el archivo", pestana in nombre or pestana in seccion["id"],
              "archivo=%s pestaña=%s" % (nombre, pestana))

    return fallos


def main():
    if not FIGMA.exists():
        sys.exit("no existe figma/: ejecuta antes tools/build_figma_export.py")

    archivos = [(FIGMA / "index.html", True)]
    archivos += [(p, False) for p in sorted(FIGMA.glob("*.html")) if p.name != "index.html"]
    archivos += [(p, False) for p in sorted((FIGMA / "estados").glob("*.html"))]

    total_fallos = 0
    print("%-56s %s" % ("archivo", "revisión"))
    print("-" * 72)
    for ruta, es_catalogo in archivos:
        fallos = revisar(ruta, es_catalogo)
        total_fallos += len(fallos)
        relativa = ruta.relative_to(FIGMA)
        if fallos:
            print("%-56s FALLA" % relativa)
            for f in fallos:
                print("    · %s" % f)
        else:
            print("%-56s ok" % relativa)
    print("-" * 72)
    print("%d archivos, %d fallos" % (len(archivos), total_fallos))
    sys.exit(1 if total_fallos else 0)


if __name__ == "__main__":
    main()
