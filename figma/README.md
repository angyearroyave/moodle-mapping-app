# Piezas del prototipo para Figma

El prototipo (`index.html`, en la raíz del repo) es **un solo archivo** con cuatro
pestañas por dos roles: las pantallas se muestran y se esconden con JavaScript. Eso
es lo correcto para usarlo, pero no para importarlo a Figma: un importador captura
lo que el navegador pinta, así que de un archivo único solo entraría la primera
pantalla.

Esta carpeta tiene el prototipo **separado en una página por pantalla**: cada
archivo es autocontenido (HTML + CSS + fuente incrustada, sin JavaScript) y lleva
su estado ya escrito en el HTML. Se importa a Figma como un cuadro independiente y
editable.

Nada de esto toca el prototipo: `index.html` sigue igual, y sigue funcionando sin
conexión.

## Si el cupo de importaciones no alcanza

El plan gratuito de html.to.design son **~10 importaciones cada 30 días**, y aquí
hay 16 piezas. Para eso está el **plugin de Figma** de este mismo repositorio
(`../figma-plugin/`): construye el prototipo **dentro** de Figma con piezas
nativas —auto-layout, estilos locales y las interacciones ya conectadas—, no
consume ninguna importación y funciona en cualquier plan de Figma. Instrucciones
en `../figma-plugin/README.md`.

Estos archivos siguen teniendo dos usos: son la referencia visual exacta del HTML
y son la fuente desde la que se generan los datos del plugin.

---

## 1 · Las 8 pantallas

Cuatro pestañas × dos roles. Son las que hacen falta para tener el prototipo
completo en Figma.

| Archivo | Pantalla | Ancho × alto ≈ |
|---|---|---|
| `01-entrega-estudiante.html` | Entrega de la unidad · estudiante | 500 × 1520 |
| `02-entrega-docente.html` | Entregas recibidas · docente | 500 × 1427 |
| `03-curso-estudiante.html` | Estado del curso · estudiante | 500 × 1606 |
| `04-curso-docente.html` | Estado del grupo · docente | 500 × 1798 |
| `05-tiempo-estudiante.html` | Tiempo disponible · estudiante | 500 × 1122 |
| `06-tiempo-docente.html` | Solicitudes de tiempo · docente | 500 × 1222 |
| `07-flujo-estudiante.html` | Cómo se guarda y se sube · estudiante | 500 × 1501 |
| `08-flujo-docente.html` | La entrega diferida · docente | 500 × 1355 |

El ancho del diseño es 500 px (`--shell` del prototipo) y cada archivo lo fija, así
que el cuadro sale igual sin importar el viewport con que se importe.

## 2 · Estados (opcionales)

Lo que el prototipo escribe en vivo cuando se usa: la entrega guardada sin señal,
la que ya subió con las dos marcas, el panel de motivos abierto, la solicitud
resuelta al instante, el tiempo agotado. Cada uno es **una importación extra**.

| Archivo | Estado | Alto ≈ |
|---|---|---|
| `estados/entrega-estudiante-guardado-sin-senal.html` | Guardó sin señal: una sola marca | 1609 |
| `estados/entrega-estudiante-entregado-dos-marcas.html` | Volvió la señal: dos marcas | 1557 |
| `estados/tiempo-estudiante-motivos-abierto.html` | Pedir más tiempo: panel abierto | 1433 |
| `estados/tiempo-estudiante-solicitud-resuelta.html` | Motivo de conexión: resuelta al instante | 1471 |
| `estados/tiempo-estudiante-tiempo-agotado.html` | Se acabó el tiempo de la unidad | 1151 |
| `estados/flujo-estudiante-guardado-sin-subir.html` | Pasos 1 y 2 hechos, el 3 en espera | 1501 |
| `estados/flujo-estudiante-subido.html` | Los cuatro pasos hechos | 1478 |
| `estados/tiempo-docente-solicitud-resuelta.html` | El docente sumó 2 días | 1126 |

Empieza por las ocho pantallas: el plan gratuito de html.to.design permite **10
importaciones cada 30 días**, y los estados consumen de ahí.

`index.html` (en esta carpeta) es un índice con enlaces a todo, útil para mirarlas
en el navegador antes de importar.

---

## 3 · Cómo se importan a Figma

El camino probado es el plugin **[html.to.design](https://html.to.design)**, gratis
en Figma. Tres maneras, de la mejor a la más artesanal.

### A · Por URL (recomendado)

Necesita que estas páginas estén publicadas. Con GitHub Pages encendido
(Settings → Pages → Source: *Deploy from a branch*, rama `main`, carpeta `/ (root)`),
cada archivo queda en:

```
https://angyearroyave.github.io/moodle-mapping-app/figma/01-entrega-estudiante.html
https://angyearroyave.github.io/moodle-mapping-app/figma/02-entrega-docente.html
...
https://angyearroyave.github.io/moodle-mapping-app/figma/estados/entrega-estudiante-guardado-sin-senal.html
```

En Figma:

1. Abre el archivo donde quieras los cuadros.
2. Menú de acciones (**⌘K** en Mac, **Ctrl+K** en Windows) → escribe
   `html.to.design` → **Run**.
3. Pestaña **Web**: pega la URL de una pantalla.
4. En el cuadro de viewport, **haz doble clic en el ancho y escribe `500`** (el alto
   da igual: después ajustas el cuadro al contenido con los altos de la tabla).
5. **Import**. Repite con cada pantalla; conviene renombrar el cuadro con el nombre
   del archivo.

### B · Pegando el código (funciona ya, sin publicar nada)

1. Abre el archivo `.html` en el navegador y copia todo (`Ctrl+A`, `Ctrl+C`), o
   copia el contenido desde tu editor.
2. En Figma, ejecuta el plugin → pestaña **Editor**.
3. Pega ahí el código y pulsa **Create**. Queda igual que por URL, sin depender de
   GitHub Pages.

Es el camino más corto si son pocas pantallas o si no quieres publicar el repo.

### C · Extensión de Chrome (para lo que no se puede alcanzar por URL)

Sirve si el prototipo está detrás de un login o en tu máquina. Desde la carpeta del
repo:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000/figma/01-entrega-estudiante.html`, pulsa el icono
de la extensión html.to.design, elige viewport, **Capture** y mándalo al plugin
(o descarga el `.h2d` y arrástralo dentro del plugin).

---

## 4 · Qué esperar (y qué no)

- **Sí**: estructura de capas, textos editables, tamaños y pesos, colores resueltos
  (los `color-mix()` y `oklch` del prototipo llegan ya como color final) y estilos
  locales de texto y color creados por el plugin.
- **No**: los importadores de HTML **no** crean auto-layout ni componentes. Llega
  una maqueta fiel pero estática: agrupar y convertir en componentes es trabajo
  manual posterior.
- La tipografía es **Oswald** (Google Fonts): va incrustada en cada archivo y Figma
  la tiene disponible en su catálogo, así que el texto entra con la familia
  correcta.
- Los cuadros se importan con el alto del viewport: ajústalos con la tabla de
  arriba.

---

## 5 · Regenerar

Todo se genera desde `index.html`; no se edita a mano.

```bash
python tools/build_figma_export.py   # escribe figma/ y figma/estados/
python tools/check_figma_export.py   # revisa cada archivo antes de subirlo
```

El segundo script comprueba lo que rompe una importación: etiquetas mal cerradas,
una pantalla que quedó oculta, dos pantallas mezcladas, JavaScript a medias, rol o
pestaña incoherentes con el nombre del archivo, o la falta de la fuente incrustada.

### Diferencias deliberadas con el prototipo

| Cambio | Por qué |
|---|---|
| Sin JavaScript, sin `<script>` | Lo que se importa es un estado, no un comportamiento. |
| Ancho fijo en 500 px | La captura no depende del viewport. |
| `.topbar` y `.tabs` dejan de ser `sticky` | Se convierten en capas flotantes encima del contenido al importar; como `.shell` es una columna flex, las pestañas siguen quedando abajo. |
| Fuera `<template>` y `<noscript>` | En un lienzo no se pintan nunca: solo estorban como capas. |
| Fuera el párrafo `sr-only` | Texto solo para lector de pantalla. |
| `a las 8:40 p.m..` → `a las 8:40 p.m.` | El prototipo concatena una hora que ya termina en punto con otro punto. En material de diseño va con uno (en `index.html` el texto de pantalla sigue con el doble punto). |
| Estados escritos a mano | Lo que el JS calcula en vivo (marcas, pasos, barra de tiempo, respuesta) aquí está fijado en el HTML. |

La barra de tiempo del archivo base se genera al 61,11 % (220 de 360 minutos), que
es el valor con el que arranca el prototipo.

---

## Alternativas al plugin

`html2design`, `Anima` y varias extensiones hacen lo mismo con matices. Si
html.to.design no te convence, el camino es el mismo: URL pública o código pegado.
