# Ruta · prototipo — plugin de Figma

Un plugin que **construye el prototipo dentro de Figma**: 16 cuadros editables
(8 pantallas + 8 estados), con auto-layout, los textos y colores del prototipo,
estilos locales y las **interacciones ya conectadas**.

Por qué existe: importar el HTML con html.to.design funciona, pero el plan
gratuito permite ~10 importaciones cada 30 días y el prototipo tiene 16 piezas.
Este camino no consume nada: los plugins de desarrollo funcionan en **cualquier
plan** (Figma lo dice así en su ayuda: *«Supported on any team or plan»*), y
como las pantallas se generan dentro de Figma, no hay cupo que gastar.

---

## Cómo se instala (una sola vez)

Necesitas la **aplicación de escritorio de Figma** (los plugins locales no
funcionan desde el navegador). En Windows:

1. Abre Figma en el escritorio y abre cualquier archivo de diseño.
2. Menú de Figma (arriba a la izquierda, ☰) → **Plugins** → **Development** →
   **Import new plugin from manifest…**
3. Elige este archivo:

   ```
   D:\usuario\Documents\Designs\moodle-app\figma-plugin\manifest.json
   ```

4. Aparece **Ruta · prototipo** en la lista. (Si no abre el selector de archivos,
   ejecuta Figma como administrador una vez: es un fallo conocido de Windows.)

## Cómo se usa

1. Crea un archivo de diseño nuevo (o abre el que quieras).
2. Menú → **Plugins** → **Development** → **Ruta · prototipo**. Tarda unos
   segundos: carga fuentes, crea estilos y arma los 16 cuadros.
3. Queda una página nueva llamada **Ruta · prototipo** con:

   - los 16 cuadros en fila, cada uno con su etiqueta encima;
   - los estilos locales **Ruta/color/…** (12 colores) y **Ruta/texto/…**
     (21 estilos) listos para reutilizar;
   - las interacciones puestas: cada cuadro navega.

4. Para recorrerlo: selecciona el **cuadro 1** y pulsa **Presentar** (▶, arriba a
   la derecha). Si prefieres que el flujo tenga punto de partida propio, en el
   panel de Prototipo del cuadro 1 pulsa **+** en *Flow starting point*.

### Qué hace cada clic

| Desde | Al pulsar | Va a |
|---|---|---|
| Entrega (estudiante) | Guardar entrega (con señal) | Estado con las dos marcas |
| Entrega (estudiante) | Sin señal | Estado guardado sin señal |
| Estado sin señal | Guardar en este dispositivo / Con señal | Estado con las dos marcas |
| Tiempo (estudiante) | Solicitar más tiempo | Panel de motivos abierto |
| Panel de motivos | No tuve señal · Se cayó la conexión | Resuelta al instante |
| Panel de motivos | Trabajo o cuidado · Otro motivo | Tiempo (docente) |
| Tiempo (docente) | Sumar 2 días | Estado resuelta por ti |
| Cualquier cuadro | Pestañas Entrega/Curso/Tiempo/Flujo | Esa pestaña, mismo rol |
| Cualquier cuadro | Conmutador Estudiante/Docente | Ese rol, misma pestaña |
| Pie | Borrar los datos de este prototipo | Vuelve a Entrega (estudiante) |

## Volver a ejecutarlo

El plugin **borra y reconstruye** la página llamada «Ruta · prototipo» cada vez.
Eso lo hace repetible —si cambias el prototipo y vuelves a ejecutar, queda al
día—, pero significa que **los cambios hechos a mano en esa página se pierden**.
Si ya la estás editando, duplica antes los cuadros que quieras conservar o
renombra la página.

---

## Qué esperar (y qué no)

- **Sí**: cuadros con auto-layout (puedes cambiar textos, mover bloques y el
  contenedor se reacomoda), textos editables, jerarquía correcta, los colores y
  la tipografía del prototipo, estilos locales y las interacciones.
- **No**: no es una captura pixel a pixel del HTML. Es una **reconstrucción** con
  piezas nativas. Diferencias conocidas: las bandas (`surface-1`) quedan
  sangradas a 16 px en lugar de llegar a los bordes, no hay sombras ni
  degradados, el interletrado es una aproximación y el campo de la reseña calcula
  su alto con una regla simple (más de 40 caracteres → 220 px, como el
  `min-height` del prototipo).
- **No crea componentes**: los badges, botones y filas están repetidos en cada
  cuadro. Convertirlos en componentes con variantes es el siguiente paso natural
  del trabajo de diseño, y se hace en Figma, no aquí.
- La tipografía es **Oswald** (Google Fonts; Figma la tiene). Si no estuviera
  disponible, el plugin cae a **Inter** y lo dice en el aviso final.

## Cómo está hecho

```
datos.js      generado por tools/html_a_figma.py: el árbol de bloques de cada
              pantalla, leído de los HTML de ../figma/ (que a su vez salen de
              index.html). No se escribe a mano.
motor.js      el dibujo: tokens, auto-layout, estilos e interacciones.
code.js       datos.js + motor.js unidos — es lo que Figma carga.
armar.js      hace esa unión.
simular.js    prueba el plugin sin Figma (ver abajo).
```

Regla que gobierna `motor.js`: primero se añade el nodo al marco y **después** se
le puede pedir que ocupe el ancho (`layoutSizingHorizontal = 'FILL'`). Al revés,
Figma lanza un error. Por eso todo pasa por `meter()`.

### Comprobar que sigue bien

```bash
cd figma-plugin
node armar.js          # datos.js + motor.js → code.js
npx tsc --noEmit       # la API de Figma, contra los typings oficiales
node simular.js        # ejecuta el plugin con un mock de la API
node simular.js --sin-oswald   # y prueba el respaldo a Inter
```

`simular.js` levanta un mock que **aplica las reglas reales de Figma** (nada de
`FILL` sin padre con auto-layout, nada de escribir texto con una fuente sin
cargar, `layoutWrap` solo en marcos horizontales, rangos de texto dentro del
texto) y después comprueba el resultado: que estén los 16 cuadros, que ninguno
se quede sin navegación y que cada acción lleve al cuadro que debe. Es la única
verificación posible sin abrir Figma; sirve para no romper el plugin al
regenerarlo.

Cuando cambies el prototipo:

```bash
python ../tools/build_figma_export.py   # rehace figma/ desde index.html
python ../tools/html_a_figma.py         # rehace datos.js desde figma/
node armar.js && npx tsc --noEmit && node simular.js
```
