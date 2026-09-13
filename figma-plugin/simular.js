/* simular.js — prueba el plugin sin abrir Figma.
 *
 * Levanta un mock de la API que además de existir aplica las reglas que Figma
 * aplica de verdad, que son las que rompen un plugin a media ejecución:
 *   · no se puede pedir FILL (layoutSizingHorizontal) sin un padre con auto-layout
 *   · no se puede escribir texto con una fuente que no se haya cargado
 *   · layoutWrap solo en marcos horizontales
 *   · los rangos de texto (negrita, monoespaciado) tienen que caer dentro del texto
 * Si el plugin las rompe, la prueba falla y dice dónde.
 *
 * Después comprueba el resultado: 16 cuadros, las interacciones conectadas a
 * donde deben y que ningún cuadro se quede sin navegación.
 *
 * Uso: node simular.js [--sin-oswald]     (--sin-oswald prueba el respaldo a Inter)
 */

const path = require('path');

const SIN_OSWALD = process.argv.includes('--sin-oswald');

let contador = 0;
const fuentesCargadas = new Set();
const avisos = [];
const problemas = [];
const paginas = [];
let cerrado = false;
const conteo = { marcos: 0, textos: 0, reacciones: 0 };

function problema(mensaje) {
  problemas.push(mensaje);
}

function nodoBase(tipo) {
  const nodo = {
    id: tipo.charAt(0).toLowerCase() + (++contador),
    type: tipo,
    name: tipo,
    children: [],
    parent: null,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    fills: [],
    layoutMode: 'NONE',
    layoutSizingHorizontal: null,
    characters: '',
    fontName: null,
    appendChild(hijo) {
      if (hijo.parent) {
        problema('nodo reañadido a otro padre: ' + hijo.id);
      }
      nodo.children.push(hijo);
      hijo.parent = nodo;
      return hijo;
    },
    remove() {
      if (nodo.parent) {
        nodo.parent.children = nodo.parent.children.filter((h) => h !== nodo);
        nodo.parent = null;
      }
      const i = paginas.indexOf(nodo);
      if (i >= 0) { paginas.splice(i, 1); }
    },
    resize(w, h) {
      nodo.width = w;
      nodo.height = h;
    },
    setReactionsAsync(reacciones) {
      reacciones.forEach((r) => {
        if (!r.actions || !r.actions.length) { problema('reacción sin acciones'); }
        if (r.actions.some((a) => a.type === 'NAVIGATE' && !a.destinationId)) {
          problema('reacción NAVIGATE sin destino');
        }
      });
      nodo.reacciones = (nodo.reacciones || []).concat(reacciones);
      conteo.reacciones += reacciones.length;
      return Promise.resolve();
    },
    setRangeFontName(inicio, fin, fuente) {
      rangoValido(nodo, inicio, fin, 'setRangeFontName');
      if (fuente && !fuentesCargadas.has(fuente.family + '|' + fuente.style)) {
        problema('rango con fuente sin cargar: ' + fuente.family + ' ' + fuente.style);
      }
    },
    setRangeTextDecoration(inicio, fin, valor) {
      rangoValido(nodo, inicio, fin, 'setRangeTextDecoration');
      if (!['UNDERLINE', 'STRIKETHROUGH', 'NONE'].includes(valor)) {
        problema('decoración de texto desconocida: ' + valor);
      }
    },
    setRangeTextDecorationThickness(inicio, fin) { rangoValido(nodo, inicio, fin, 'thickness'); },
    setRangeTextDecorationOffset(inicio, fin) { rangoValido(nodo, inicio, fin, 'offset'); },
    setRangeTextDecorationColor(inicio, fin) { rangoValido(nodo, inicio, fin, 'color'); },
  };

  if (tipo === 'FRAME') { conteo.marcos += 1; }
  if (tipo === 'TEXT') { conteo.textos += 1; }

  Object.defineProperty(nodo, 'layoutSizingHorizontal', {
    get() { return nodo._ancho || 'FIXED'; },
    set(valor) {
      if (valor === 'FILL') {
        const padre = nodo.parent;
        const ok = padre && padre.type === 'FRAME' && padre.layoutMode !== 'NONE';
        if (!ok) {
          problema('FILL sin padre con auto-layout en ' + nodo.id + ' (' + nodo.type + ')');
        }
      }
      nodo._ancho = valor;
    },
  });

  Object.defineProperty(nodo, 'layoutWrap', {
    get() { return nodo._wrap; },
    set(valor) {
      if (valor !== 'NO_WRAP' && nodo.layoutMode !== 'HORIZONTAL') {
        problema('layoutWrap en un marco que no es horizontal (' + nodo.id + ')');
      }
      nodo._wrap = valor;
    },
  });

  Object.defineProperty(nodo, 'fontName', {
    get() { return nodo._fuente; },
    set(fuente) {
      if (fuente && !fuentesCargadas.has(fuente.family + '|' + fuente.style)) {
        problema('fuente sin cargar: ' + fuente.family + ' ' + fuente.style);
      }
      nodo._fuente = fuente;
    },
  });

  Object.defineProperty(nodo, 'characters', {
    get() { return nodo._texto || ''; },
    set(texto) {
      if (!nodo._fuente) {
        problema('texto sin fuente asignada (' + nodo.id + ')');
      }
      nodo._texto = texto;
    },
  });

  return nodo;
}

function rangoValido(nodo, inicio, fin, quien) {
  const largo = (nodo._texto || '').length;
  if (inicio < 0 || fin > largo || inicio > fin) {
    problema(quien + ': rango ' + inicio + '–' + fin + ' fuera de un texto de ' + largo);
  }
}

function crearFigma() {
  return {
    createFrame: () => nodoBase('FRAME'),
    createText: () => {
      const t = nodoBase('TEXT');
      return t;
    },
    createPage: () => {
      const p = nodoBase('PAGE');
      paginas.push(p);
      return p;
    },
    root: {
      get children() { return paginas.slice(); },
    },
    loadFontAsync: async (fuente) => {
      if (SIN_OSWALD && fuente.family === 'Oswald') {
        throw new Error('fuente no disponible: Oswald');
      }
      fuentesCargadas.add(fuente.family + '|' + (fuente.style || '*'));
    },
    getLocalPaintStylesAsync: async () => [],
    getLocalTextStylesAsync: async () => [],
    createPaintStyle: () => ({ name: '', paints: [] }),
    createTextStyle: () => ({ name: '', fontName: null, fontSize: 0, lineHeight: null }),
    loadAllPagesAsync: async () => {},
    setCurrentPageAsync: async () => {},
    notify: (mensaje) => { avisos.push(mensaje); },
    closePlugin: () => { cerrado = true; },
    viewport: { scrollAndZoomIntoView: () => {} },
  };
}

// ── ayudantes para las comprobaciones ────────────────────────────────────

function recorrer(nodo, salida = []) {
  salida.push(nodo);
  (nodo.children || []).forEach((h) => recorrer(h, salida));
  return salida;
}

function cuadro(nombre) {
  const pagina = paginas[0];
  return recorrer(pagina).find((n) => n.name === nombre && n.type === 'FRAME');
}

function textosDe(nodo) {
  return recorrer(nodo).filter((n) => n.type === 'TEXT');
}

function botonConTexto(raiz, texto) {
  const etiqueta = textosDe(raiz).find((t) => t.characters.includes(texto));
  return etiqueta ? etiqueta.parent : null;
}

const comprobaciones = [];
function comprobar(nombre, condicion, detalle) {
  comprobaciones.push({ nombre, ok: !!condicion, detalle: detalle || '' });
}

function destinoDe(nodo) {
  const r = nodo && nodo.reacciones && nodo.reacciones[0];
  const a = r && r.actions && r.actions[0];
  if (!a) { return null; }
  const destino = recorrer(paginas[0]).find((n) => n.id === a.destinationId);
  return destino ? destino.name : 'id ' + a.destinationId;
}

async function principal() {
  global.figma = crearFigma();

  let errorCarga = null;
  try {
    require('./code.js');
  } catch (e) {
    errorCarga = e;
  }

  // esperar a que el plugin termine (marca closePlugin) o se agote el tiempo
  const limite = Date.now() + 5000;
  while (!cerrado && Date.now() < limite) {
    await new Promise((r) => setTimeout(r, 20));
  }

  comprobar('el plugin carga sin excepciones', !errorCarga, errorCarga && errorCarga.message);
  comprobar('el plugin termina (llama a closePlugin)', cerrado);
  comprobar('no rompe ninguna regla de la API', problemas.length === 0,
    problemas.slice(0, 6).join(' | '));
  comprobar('avisa por notificación', avisos.length > 0);
  comprobar('informa 16 cuadros', avisos.some((a) => a.includes('16 cuadros')),
    avisos.join(' / '));
  comprobar('usa Oswald' + (SIN_OSWALD ? '… no: debe caer a Inter' : ''),
    SIN_OSWALD ? avisos.some((a) => a.includes('Tipografía: Inter'))
               : avisos.some((a) => a.includes('Tipografía: Oswald')),
    avisos.join(' / '));

  const pantallas = cuadro('Entrega · estudiante') ? 16 : 0;
  comprobar('están los 16 cuadros', pantallas === 16, 'encontrados: ' + pantallas);

  const nombres = [
    'Entrega · estudiante', 'Entrega · docente', 'Curso · estudiante', 'Curso · docente',
    'Tiempo · estudiante', 'Tiempo · docente', 'Flujo · estudiante', 'Flujo · docente',
    'Entrega · estudiante · guardado sin señal',
    'Entrega · estudiante · entregado con las dos marcas',
    'Tiempo · estudiante · pedir más tiempo',
    'Tiempo · estudiante · resuelta al instante',
    'Tiempo · estudiante · sin tiempo',
    'Flujo · estudiante · guardado sin subir',
    'Flujo · estudiante · las dos marcas',
    'Tiempo · docente · resuelta por ti',
  ];
  const faltan = nombres.filter((n) => !cuadro(n));
  comprobar('ningún cuadro se llama distinto', faltan.length === 0, faltan.join(', '));

  const sinNavegacion = nombres.filter((n) => {
    const c = cuadro(n);
    return !c || !recorrer(c).some((x) => x.reacciones && x.reacciones.length);
  });
  comprobar('todos los cuadros navegan a alguna parte', sinNavegacion.length === 0,
    sinNavegacion.join(', '));

  const entrega = cuadro('Entrega · estudiante');
  if (entrega) {
    comprobar('guardar lleva al estado con dos marcas',
      destinoDe(botonConTexto(entrega, 'Guardar entrega'))
        === 'Entrega · estudiante · entregado con las dos marcas',
      String(destinoDe(botonConTexto(entrega, 'Guardar entrega'))));
    comprobar('«Sin señal» lleva al estado guardado sin señal',
      destinoDe(botonConTexto(entrega, 'Sin señal'))
        === 'Entrega · estudiante · guardado sin señal',
      String(destinoDe(botonConTexto(entrega, 'Sin señal'))));
    comprobar('la pestaña Curso lleva a Curso · estudiante',
      destinoDe(botonConTexto(entrega, 'Curso')) === 'Curso · estudiante',
      String(destinoDe(botonConTexto(entrega, 'Curso'))));
    comprobar('el rol Docente lleva a Entrega · docente',
      destinoDe(botonConTexto(entrega, 'Docente')) === 'Entrega · docente',
      String(destinoDe(botonConTexto(entrega, 'Docente'))));
  }

  const tiempo = cuadro('Tiempo · estudiante');
  if (tiempo) {
    comprobar('«Solicitar más tiempo» abre el panel de motivos',
      destinoDe(botonConTexto(tiempo, 'Solicitar más tiempo'))
        === 'Tiempo · estudiante · pedir más tiempo',
      String(destinoDe(botonConTexto(tiempo, 'Solicitar más tiempo'))));
  }

  const motivos = cuadro('Tiempo · estudiante · pedir más tiempo');
  if (motivos) {
    comprobar('un motivo de conexión se resuelve al instante',
      destinoDe(botonConTexto(motivos, 'No tuve señal'))
        === 'Tiempo · estudiante · resuelta al instante',
      String(destinoDe(botonConTexto(motivos, 'No tuve señal'))));
    comprobar('un motivo que no es de conexión va al docente',
      destinoDe(botonConTexto(motivos, 'Trabajo o cuidado')) === 'Tiempo · docente',
      String(destinoDe(botonConTexto(motivos, 'Trabajo o cuidado'))));
  }

  const tiempoDocente = cuadro('Tiempo · docente');
  if (tiempoDocente) {
    comprobar('el docente puede sumar 2 días',
      destinoDe(botonConTexto(tiempoDocente, 'Sumar 2 días'))
        === 'Tiempo · docente · resuelta por ti',
      String(destinoDe(botonConTexto(tiempoDocente, 'Sumar 2 días'))));
  }

  const flujo = cuadro('Flujo · estudiante');
  if (flujo) {
    comprobar('la pestaña Flujo lleva a Flujo · estudiante',
      destinoDe(botonConTexto(flujo, 'Flujo')) === 'Flujo · estudiante',
      String(destinoDe(botonConTexto(flujo, 'Flujo'))));
  }

  const caja = cuadro('Curso · docente');
  if (caja) {
    comprobar('el expediente llega completo',
      textosDe(caja).some((t) => t.characters.includes('Marcas automáticas')));
  }

  // ── informe ────────────────────────────────────────────────────────────
  const fallos = comprobaciones.filter((c) => !c.ok);
  comprobaciones.forEach((c) => {
    console.log((c.ok ? '  ok   ' : '  FALLA') + '  ' + c.nombre
      + (c.ok || !c.detalle ? '' : '  → ' + c.detalle));
  });
  console.log('—');
  console.log(conteo.marcos + ' marcos, ' + conteo.textos + ' textos, '
    + conteo.reacciones + ' interacciones, ' + fuentesCargadas.size + ' fuentes cargadas');
  console.log(comprobaciones.length - fallos.length + '/' + comprobaciones.length + ' comprobaciones');
  process.exit(fallos.length ? 1 : 0);
}

principal().catch((e) => {
  console.error('la simulación se cayó: ' + (e && e.stack ? e.stack : e));
  process.exit(1);
});
