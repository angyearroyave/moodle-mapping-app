# -*- coding: utf-8 -*-
"""
Genera `figma/`: una página HTML autocontenida por pantalla del prototipo.

Para qué: el prototipo vive en un solo `index.html` con pantallas que se
muestran y se esconden con JavaScript. Un importador de Figma (html.to.design)
captura lo que el navegador pinta: con un solo archivo solo entraría la
pantalla inicial. Aquí se separa en un archivo por pantalla, sin JavaScript y
con el estado ya escrito en el HTML, para que cada uno entre a Figma como un
cuadro independiente y editable.

Qué NO cambia: `index.html` sigue siendo el prototipo interactivo, intacto y
sin conexión. Este script solo lee de ahí.

Uso:  python tools/build_figma_export.py
"""

import re
import pathlib
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
ORIGEN = RAIZ / "index.html"
DESTINO = RAIZ / "figma"

# ── pantallas del prototipo, en el orden de las pestañas ───────────────────
# (id de la sección, pestaña, rol, nombre de archivo, título humano)
PANTALLAS = [
    ("pantalla-entrega", "entrega", "estudiante", "01-entrega-estudiante.html",
     "Entrega · estudiante"),
    ("pantalla-entrega-docente", "entrega", "docente", "02-entrega-docente.html",
     "Entrega · docente"),
    ("pantalla-curso", "curso", "estudiante", "03-curso-estudiante.html",
     "Curso · estudiante"),
    ("pantalla-curso-docente", "curso", "docente", "04-curso-docente.html",
     "Curso · docente"),
    ("pantalla-tiempo", "tiempo", "estudiante", "05-tiempo-estudiante.html",
     "Tiempo · estudiante"),
    ("pantalla-tiempo-docente", "tiempo", "docente", "06-tiempo-docente.html",
     "Tiempo · docente"),
    ("pantalla-flujo", "flujo", "estudiante", "07-flujo-estudiante.html",
     "Flujo · estudiante"),
    ("pantalla-flujo-docente", "flujo", "docente", "08-flujo-docente.html",
     "Flujo · docente"),
]

# ── estados derivados: el prototipo escribe estas variantes con JS ─────────
# (archivo, pantalla base, título humano, transformación)
ESTADOS = []


def sub(texto, viejo, nuevo, veces=1):
    """Reemplazo con verificación: si el patrón no está (o está repetido), falla."""
    cuenta = texto.count(viejo)
    if cuenta != veces:
        sys.exit("patrón inesperado (%d veces, se esperaba %d): %r"
                 % (cuenta, veces, viejo[:90]))
    return texto.replace(viejo, nuevo)


def barra_base(seccion):
    """El prototipo escribe este ancho con JS: 220 minutos de 360."""
    return sub(seccion, '<div class="bar-fill" id="barra-relleno"></div>',
               '<div class="bar-fill" id="barra-relleno" style="--valor: 61.11%"></div>')


# ajustes de la copia base de cada pantalla; los estados heredan la corrección
AJUSTES_BASE = {"pantalla-tiempo": barra_base}


def identidad(seccion):
    return seccion


def ajustar(id_seccion, seccion):
    """Aplica lo que el prototipo resuelve con JS y aquí queda escrito."""
    return AJUSTES_BASE.get(id_seccion, identidad)(seccion)


# ── CSS que solo existe en la copia para Figma ─────────────────────────────
CAPA_EXPORTACION = """
/* ── capa de exportación para Figma ────────────────────────────────────────
   No forma parte del prototipo. Existe para que la captura de un importador
   (html.to.design y similares) sea predecible:
   1. fija el ancho del diseño en 500 px, el mismo --shell del prototipo, así
      el cuadro no depende del viewport con que se importe;
   2. vuelve estáticas las dos barras que en el prototipo son sticky, para que
      el importador no las deje flotando encima del contenido. Como .shell es
      una columna flex, las pestañas siguen quedando abajo. */
html { background: var(--surface-1); }
body { width: var(--shell); margin-inline: auto; }
.topbar, .tabs { position: static; }
"""


def leer_origen():
    if not ORIGEN.exists():
        sys.exit("no encuentro index.html en %s" % ORIGEN)
    return ORIGEN.read_text(encoding="utf-8")


def trozos(fuente):
    """Saca del index.html las piezas que se reutilizan en cada archivo."""
    def uno(patron, etiqueta):
        m = re.search(patron, fuente, re.S)
        if not m:
            sys.exit("no pude extraer %s de index.html" % etiqueta)
        return m.group(0)

    estilo = uno(r'<style data-od-inline-asset="theme\.css">.*?</style>', "el <style>")
    estilo = re.sub(r'^<style[^>]*>|</style>$', '', estilo).strip("\n")
    pie = uno(r'    <footer class="foot".*?</footer>\n', "el pie")
    # el aviso de <noscript> habla del prototipo interactivo: estas copias no
    # llevan JavaScript, así que el aviso sobra (y como capa invisible molesta)
    pie = re.sub(r'\s*<noscript>.*?</noscript>', '', pie, flags=re.S)
    return {
        "estilo": estilo,
        "meta": uno(r'  <meta name="viewport"[^>]*>\n', "el meta viewport"),
        "descripcion": uno(r'  <meta name="description"[^>]*>\n', "la meta description"),
        "cabecera": uno(r'  <header class="topbar".*?</header>\n', "la cabecera"),
        "pie": pie,
        "tabs": uno(r'  <nav class="tabs".*?</nav>\n', "la navegación"),
    }


def limpiar_seccion(seccion):
    """Deja la sección lista para un lienzo: sin lo que solo sirve con teclado."""
    seccion = re.sub(r'^\s*<p class="sr-only".*?</p>\n', '', seccion, flags=re.M | re.S)

    # las <template> guardan los textos que el prototipo inserta con JS: en un
    # lienzo no se pintan nunca, y aquí el estado ya está escrito a mano
    seccion = re.sub(r'\s*<template[^>]*>.*?</template>\n?', '', seccion, flags=re.S)

    # la etiqueta de apertura: se muestra siempre en la copia estática
    def abrir(m):
        etiqueta = re.sub(r'\s+hidden(?=[\s>])', '', m.group(0), count=1)
        return etiqueta

    return re.sub(r'<section class="screen"[^>]*>', abrir, seccion, count=1)


def con_rol(cabecera, rol):
    if rol == "docente":
        cabecera = sub(cabecera,
                       'id="btn-rol-estudiante" data-action="rol" data-rol="estudiante" aria-pressed="true"',
                       'id="btn-rol-estudiante" data-action="rol" data-rol="estudiante" aria-pressed="false"')
        cabecera = sub(cabecera,
                       'id="btn-rol-docente" data-action="rol" data-rol="docente" aria-pressed="false"',
                       'id="btn-rol-docente" data-action="rol" data-rol="docente" aria-pressed="true"')
    return cabecera


def con_pestana_activa(tabs, pestana):
    def marcar(m):
        etiqueta = m.group(0)
        activa = 'data-pantalla="%s"' % pestana in etiqueta
        etiqueta = etiqueta.replace(' aria-current="page"', '')
        return etiqueta if not activa else etiqueta.replace(
            ' type="button"', ' type="button" aria-current="page"')
    return re.sub(r'<button class="tab".*?</button>', marcar, tabs, flags=re.S)


CABECERA_ARCHIVO = """<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
{meta}{descripcion}  <title>Ruta · {titulo}</title>
  <!-- Copia estática de una sola pantalla del prototipo: sin JavaScript y con
       el estado ya escrito, para importarla a Figma como un cuadro.
       Se regenera con: python tools/build_figma_export.py -->
  <style data-od-inline-asset="theme.css">
{estilo}
{capa}</style>
</head>
<body>
<div class="shell">
"""

PIE_ARCHIVO = """</div>
</body>
</html>
"""


def construir(trozos_comunes, seccion, rol, pestana, titulo):
    partes = [
        CABECERA_ARCHIVO.format(
            meta=trozos_comunes["meta"],
            descripcion=trozos_comunes["descripcion"],
            titulo=titulo,
            estilo=trozos_comunes["estilo"],
            capa=CAPA_EXPORTACION,
        ),
        con_rol(trozos_comunes["cabecera"], rol),
        '\n  <main id="contenido">\n',
        seccion,
        '  </main>\n\n',
        trozos_comunes["pie"],
        '\n',
        con_pestana_activa(trozos_comunes["tabs"], pestana),
        PIE_ARCHIVO,
    ]
    return "".join(partes)


# ── estados escritos a mano (lo que el JS del prototipo produce en vivo) ───

FECHA_HECHA = "ayer, 8:40 p.m."
HORA_HECHA = "8:40 p.m."
FECHA_SUBIDA = "hoy, 7:12 a.m."
HORA_SUBIDA = "7:12 a.m."

# Las horas ya terminan en punto: el prototipo las concatena con otro punto
# («a las 8:40 p.m..»). En estas copias —que son material de diseño— va con uno.
REGISTRO_SIN_SUBIR = (
    '<li class="record"><p><span class="badge badge--wait">Sin subir '
    '<span class="mark">hecho %s</span></span></p>'
    '<p class="record-marks">Se guardó sin señal a las %s '
    'Se subirá solo cuando vuelva la señal.</p></li>' % (HORA_HECHA, HORA_HECHA)
)

REGISTRO_ENTREGADO = (
    '<li class="record"><p><span class="badge badge--done">Entregado sin conexión</span></p>'
    '<p class="record-marks">hecho %s · subido %s</p></li>' % (FECHA_HECHA, FECHA_SUBIDA)
)


def sin_senal(seccion):
    seccion = sub(seccion,
                  'data-action="conexion" data-en-linea="si" aria-pressed="true"',
                  'data-action="conexion" data-en-linea="si" aria-pressed="false"')
    seccion = sub(seccion,
                  'data-action="conexion" data-en-linea="no" aria-pressed="false"',
                  'data-action="conexion" data-en-linea="no" aria-pressed="true"')
    seccion = sub(seccion,
                  '<span id="etiqueta-con">Guardar entrega</span>'
                  '<span id="etiqueta-sin" hidden>Guardar en este dispositivo</span>',
                  '<span id="etiqueta-con" hidden>Guardar entrega</span>'
                  '<span id="etiqueta-sin">Guardar en este dispositivo</span>')
    return seccion


def guardado_sin_subir(seccion):
    """Estado: escribió sin señal y guardó. Una entrega, una sola marca."""
    seccion = sin_senal(seccion)
    seccion = sub(seccion,
                  '<p class="answer" id="estado-entrega" role="status" aria-live="polite">'
                  'Todavía no has guardado nada.</p>',
                  '<p class="answer" id="estado-entrega" role="status" aria-live="polite">'
                  'Guardado en este teléfono a las %s Se subirá solo cuando vuelva la señal.</p>'
                  % HORA_HECHA)
    seccion = sub(seccion,
                  '<p class="note" id="vacio-registros">Sin registros todavía. '
                  'Guarda una entrega para verlos.</p>',
                  '<p class="note" id="vacio-registros" hidden>Sin registros todavía. '
                  'Guarda una entrega para verlos.</p>')
    seccion = sub(seccion, '<ul class="records" id="lista-registros" aria-busy="false"></ul>',
                  '<ul class="records" id="lista-registros" aria-busy="false">\n'
                  '            %s\n          </ul>' % REGISTRO_SIN_SUBIR)
    return seccion


def entregado_dos_marcas(seccion):
    """Estado: llegó la señal y la entrega quedó con las dos marcas."""
    seccion = sub(seccion,
                  '<p class="answer" id="estado-entrega" role="status" aria-live="polite">'
                  'Todavía no has guardado nada.</p>',
                  '<p class="answer" id="estado-entrega" role="status" aria-live="polite">'
                  'Subido a las %s El registro quedó con las dos marcas.</p>' % HORA_SUBIDA)
    seccion = sub(seccion,
                  '<p class="note" id="vacio-registros">Sin registros todavía. '
                  'Guarda una entrega para verlos.</p>',
                  '<p class="note" id="vacio-registros" hidden>Sin registros todavía. '
                  'Guarda una entrega para verlos.</p>')
    seccion = sub(seccion, '<ul class="records" id="lista-registros" aria-busy="false"></ul>',
                  '<ul class="records" id="lista-registros" aria-busy="false">\n'
                  '            %s\n          </ul>' % REGISTRO_ENTREGADO)
    return seccion


def motivos_abierto(seccion):
    seccion = sub(seccion, '<div class="band" id="panel-motivos" hidden>',
                  '<div class="band" id="panel-motivos">')
    seccion = sub(seccion, 'id="btn-motivos" data-action="motivos" aria-expanded="false"',
                  'id="btn-motivos" data-action="motivos" aria-expanded="true"')
    return seccion


def tiempo_agotado(seccion):
    seccion = sub(seccion, 'id="t-restante">3 h 40 m<', 'id="t-restante">0 m<')
    seccion = sub(seccion,
                  'aria-valuenow="220" aria-valuetext="Te quedan 3 h 40 m de 6 h"',
                  'aria-valuenow="0" aria-valuetext="Te quedan 0 m de 6 h"')
    seccion = sub(seccion, '<div class="bar" id="barra"', '<div class="bar bar--low" id="barra"')
    seccion = sub(seccion,
                  '<div class="bar-fill" id="barra-relleno" style="--valor: 61.11%"></div>',
                  '<div class="bar-fill" id="barra-relleno" style="--valor: 0%"></div>')
    seccion = sub(seccion,
                  '<p class="time-state" id="tiempo-estado"><span class="mark" aria-hidden="true">'
                  '●</span> El tiempo está corriendo.</p>',
                  '<p class="time-state time-state--paused" id="tiempo-estado">'
                  '<span class="mark" aria-hidden="true">■</span> Se acabó el tiempo de trabajo '
                  'de esta unidad. Puedes pedir más sin explicar por qué.</p>')
    return seccion


def solicitud_resuelta(seccion):
    """Estado: pidió más tiempo por conexión y el sistema lo resolvió solo."""
    seccion = sub(seccion, 'id="t-restante">3 h 40 m<', 'id="t-restante">2 días 3 h 40 m<')
    seccion = sub(seccion, 'id="t-total">6 h<', 'id="t-total">2 días 6 h<')
    seccion = sub(seccion,
                  'aria-valuemax="360" aria-valuenow="220" '
                  'aria-valuetext="Te quedan 3 h 40 m de 6 h"',
                  'aria-valuemax="3240" aria-valuenow="3100" '
                  'aria-valuetext="Te quedan 2 días 3 h 40 m de 2 días 6 h"')
    seccion = sub(seccion,
                  '<div class="bar-fill" id="barra-relleno" style="--valor: 61.11%"></div>',
                  '<div class="bar-fill" id="barra-relleno" style="--valor: 95.68%"></div>')
    seccion = sub(seccion,
                  '<div class="band answer" id="respuesta" role="status" aria-live="polite" hidden></div>',
                  '<div class="band answer" id="respuesta" role="status" aria-live="polite">\n'
                  '            <p><span class="badge badge--done">Tiempo sumado</span></p>\n'
                  '            <p>Sumamos 2 días a tu tiempo de trabajo. Los motivos de conexión '
                  'se resuelven en el momento, sin aprobación y sin pedir explicaciones. Queda '
                  'registrado el motivo, no una justificación.</p>\n'
                  '          </div>')
    seccion = sub(seccion,
                  '<li class="record"><p class="note">Todavía no has solicitado más tiempo.</p></li>',
                  '<li class="record"><p><span class="badge badge--done">Resuelta al instante</span></p>'
                  '<p class="record-marks">No tuve señal · Se sumaron 2 días a tu tiempo de trabajo. '
                  'Queda registrado el motivo, no una justificación.</p></li>')
    return seccion


def flujo_guardado_sin_subir(seccion):
    """Estado: pasos 1 y 2 hechos, el 3 esperando señal, el 4 sin llegar."""
    seccion = sub(seccion,
                  '<li class="step" id="paso-1">',
                  '<li class="step step--done" id="paso-1">')
    seccion = sub(seccion, '<span class="badge badge--todo" id="paso-1-badge">Falta</span>',
                  '<span class="badge badge--done" id="paso-1-badge">Hecho</span>')
    seccion = sub(seccion,
                  '<li class="step" id="paso-2">',
                  '<li class="step step--done" id="paso-2">')
    seccion = sub(seccion, '<span class="badge badge--todo" id="paso-2-badge">Falta</span>',
                  '<span class="badge badge--done" id="paso-2-badge">Hecho</span>')
    seccion = sub(seccion,
                  '<li class="step" id="paso-3">',
                  '<li class="step step--wait" id="paso-3">')
    seccion = sub(seccion, '<span class="badge badge--todo" id="paso-3-badge">Falta</span>',
                  '<span class="badge badge--wait" id="paso-3-badge">Sin subir '
                  '<span class="mark">hecho %s</span></span>' % HORA_HECHA)
    seccion = sub(seccion,
                  '<p class="note" id="paso-2-nota">Al guardar queda aquí, con la hora de tu reloj.</p>',
                  '<p class="note" id="paso-2-nota">Guardada en este teléfono %s</p>' % FECHA_HECHA)
    seccion = sub(seccion,
                  '<p class="record-marks" id="flujo-marcas">Todavía sin marcas. '
                  'Cuando guardes una entrega aparecerán aquí.</p>',
                  '<p class="record-marks" id="flujo-marcas">hecho %s · la segunda marca llega '
                  'cuando vuelva la señal.</p>' % FECHA_HECHA)
    return seccion


def flujo_subido(seccion):
    """Estado: los cuatro pasos hechos, con las dos marcas en el registro."""
    seccion = flujo_guardado_sin_subir(seccion)
    seccion = sub(seccion,
                  '<li class="step step--wait" id="paso-3">',
                  '<li class="step step--done" id="paso-3">')
    seccion = sub(seccion, '<span class="badge badge--wait" id="paso-3-badge">Sin subir '
                           '<span class="mark">hecho %s</span></span>' % HORA_HECHA,
                  '<span class="badge badge--done" id="paso-3-badge">Hecho</span>')
    seccion = sub(seccion, '<li class="step" id="paso-4">',
                  '<li class="step step--done" id="paso-4">')
    seccion = sub(seccion, '<span class="badge badge--todo" id="paso-4-badge">Falta</span>',
                  '<span class="badge badge--done" id="paso-4-badge">Hecho</span>')
    seccion = sub(seccion,
                  '<p class="record-marks" id="flujo-marcas">hecho %s · la segunda marca llega '
                  'cuando vuelva la señal.</p>' % FECHA_HECHA,
                  '<p class="record-marks" id="flujo-marcas">hecho %s · subido %s</p>'
                  % (FECHA_HECHA, FECHA_SUBIDA))
    return seccion


def solicitud_resuelta_docente(seccion):
    """Estado (docente): el motivo no era de conexión y el docente sumó 2 días."""
    seccion = sub(seccion,
                  '<p id="marca-ej-2"><span class="badge badge--wait">Espera tu respuesta '
                  '<span class="mark">solicitada hoy, 6:40 p.m.</span></span></p>',
                  '<p id="marca-ej-2"><span class="badge badge--done">Resuelta por ti</span></p>')
    seccion = sub(seccion,
                  '<p class="record-marks" id="nota-ej-2">El motivo no es de conexión, '
                  'así que la decisión es tuya.</p>',
                  '<p class="record-marks" id="nota-ej-2">Sumaste 2 días a su tiempo de trabajo. '
                  'Queda registrado el motivo, no una justificación.</p>')
    seccion = sub(seccion,
                  '              <div class="actions" id="accion-ej-2">\n'
                  '                <button class="btn btn--secondary" type="button" '
                  'data-action="sumar-docente" data-solicitud="ej-2" data-foco="sumar-ej-2">'
                  'Sumar 2 días</button>\n'
                  '              </div>\n',
                  '')
    return seccion


ESTADOS = [
    ("01-entrega-estudiante.html", "entrega-estudiante-guardado-sin-senal.html",
     "Entrega · estudiante · guardado sin señal",
     "escribió y guardó sin señal: una sola marca, la de su reloj", guardado_sin_subir),
    ("01-entrega-estudiante.html", "entrega-estudiante-entregado-dos-marcas.html",
     "Entrega · estudiante · entregado con las dos marcas",
     "volvió la señal y la entrega subió sola", entregado_dos_marcas),
    ("05-tiempo-estudiante.html", "tiempo-estudiante-motivos-abierto.html",
     "Tiempo · estudiante · pedir más tiempo",
     "el panel de motivos abierto: un clic, sin escribir nada", motivos_abierto),
    ("05-tiempo-estudiante.html", "tiempo-estudiante-solicitud-resuelta.html",
     "Tiempo · estudiante · resuelta al instante",
     "el motivo era de conexión: el sistema sumó 2 días y lo registró", solicitud_resuelta),
    ("05-tiempo-estudiante.html", "tiempo-estudiante-tiempo-agotado.html",
     "Tiempo · estudiante · sin tiempo",
     "se acabó el presupuesto de trabajo de la unidad", tiempo_agotado),
    ("07-flujo-estudiante.html", "flujo-estudiante-guardado-sin-subir.html",
     "Flujo · estudiante · guardado sin subir",
     "los pasos 1 y 2 hechos, el 3 esperando señal", flujo_guardado_sin_subir),
    ("07-flujo-estudiante.html", "flujo-estudiante-subido.html",
     "Flujo · estudiante · las dos marcas",
     "los cuatro pasos hechos y el registro con las dos horas", flujo_subido),
    ("06-tiempo-docente.html", "tiempo-docente-solicitud-resuelta.html",
     "Tiempo · docente · resuelta por ti",
     "el motivo no era de conexión: la decisión fue del docente", solicitud_resuelta_docente),
]


def archivo_catalogo(trozos_comunes, filas_pantallas, filas_estados):
    return """<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
{meta}{descripcion}  <title>Ruta · piezas para Figma</title>
  <style data-od-inline-asset="theme.css">
{estilo}
{capa}</style>
</head>
<body>
<div class="shell">
  <header class="topbar">
    <div class="brandbar">
      <span class="brand">Ruta</span>
      <span class="brand-meta">Piezas para importar a Figma</span>
    </div>
  </header>

  <main>
    <div class="stack">
      <div>
        <h1>Prototipo separado en pantallas</h1>
        <p class="lead">Cada enlace es una página autocontenida con una sola pantalla, sin
        JavaScript y con su estado ya escrito: se importa a Figma como un cuadro independiente.</p>
      </div>

      <div class="block">
        <h2>Las 8 pantallas del prototipo</h2>
        <p class="note">Cuatro pestañas por dos roles. Es lo mínimo para tener el prototipo completo
        en Figma: ocho importaciones.</p>
        <div class="records">
{filas_pantallas}        </div>
      </div>

      <div class="block">
        <h2>Estados opcionales</h2>
        <p class="note">Lo que el prototipo escribe en vivo cuando se usa: cada uno es una
        importación extra. El plan gratuito de html.to.design permite 10 cada 30 días, así que
        empieza por las ocho pantallas y añade estados solo si los necesitas.</p>
        <div class="records">
{filas_estados}        </div>
      </div>

      <div class="block">
        <h2>Cómo se importan</h2>
        <p>Las instrucciones completas están en <span class="meta">figma/README.md</span>.</p>
        <p class="note">Resumen: en Figma, abre el plugin <span class="meta">html.to.design</span>,
        pega la URL de una de estas páginas (o usa su pestaña <span class="meta">Editor</span> con
        el código del archivo) y elige 500 px de ancho.</p>
      </div>
    </div>
  </main>

  <footer class="foot">
    <p class="note">Generado por <span class="meta">tools/build_figma_export.py</span> a partir de
    <span class="meta">index.html</span>. No editar a mano: se regenera.</p>
  </footer>
</div>
</body>
</html>
""".format(meta=trozos_comunes["meta"], descripcion=trozos_comunes["descripcion"],
           estilo=trozos_comunes["estilo"], capa=CAPA_EXPORTACION,
           filas_pantallas=filas_pantallas, filas_estados=filas_estados)


def main():
    fuente = leer_origen()
    comunes = trozos(fuente)
    secciones = {}
    for m in re.finditer(r'<section class="screen"[^>]*id="(?P<id>[^"]+)"[^>]*>.*?</section>',
                         fuente, re.S):
        secciones[m.group("id")] = m.group(0)

    faltan = [p[0] for p in PANTALLAS if p[0] not in secciones]
    if faltan:
        sys.exit("faltan secciones en index.html: %s" % ", ".join(faltan))

    DESTINO.mkdir(exist_ok=True)
    (DESTINO / "estados").mkdir(exist_ok=True)

    generadas = []
    for id_seccion, pestana, rol, archivo, titulo in PANTALLAS:
        seccion = ajustar(id_seccion, limpiar_seccion(secciones[id_seccion]))
        pagina = construir(comunes, seccion, rol, pestana, "Pantalla %s" % titulo)
        (DESTINO / archivo).write_text(pagina, encoding="utf-8", newline="\n")
        generadas.append((archivo, "Pantalla %s" % titulo,
                          "archivo estático, listo para importar"))

    estados_generados = []
    for archivo_base, archivo, titulo, nota, transformar in ESTADOS:
        id_seccion = next(p[0] for p in PANTALLAS if p[3] == archivo_base)
        pestana, rol = next((p[1], p[2]) for p in PANTALLAS if p[3] == archivo_base)
        seccion = transformar(ajustar(id_seccion, limpiar_seccion(secciones[id_seccion])))
        pagina = construir(comunes, seccion, rol, pestana, titulo)
        (DESTINO / "estados" / archivo).write_text(pagina, encoding="utf-8", newline="\n")
        estados_generados.append((archivo, titulo, nota))

    filas_pantallas = "".join(
        '        <div class="record">\n          <p><a class="link" href="%s">%s</a></p>\n'
        '          <p class="record-marks">%s</p>\n        </div>\n' % (a, t, n)
        for a, t, n in generadas)
    filas_estados = "".join(
        '        <div class="record">\n          <p><a class="link" href="estados/%s">%s</a></p>\n'
        '          <p class="record-marks">%s</p>\n        </div>\n' % (a, t, n)
        for a, t, n in estados_generados)
    (DESTINO / "index.html").write_text(
        archivo_catalogo(comunes, filas_pantallas, filas_estados), encoding="utf-8",
        newline="\n")

    print("%d pantallas en figma/, %d estados en figma/estados/, más figma/index.html"
          % (len(generadas), len(estados_generados)))


if __name__ == "__main__":
    main()
