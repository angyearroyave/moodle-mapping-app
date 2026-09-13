// @ts-check
/* motor.js — arma el prototipo «Ruta» dentro de Figma.
 *
 * Se une con datos.js para producir code.js, que es lo que Figma carga:
 *   node armar.js        (o npm run armar)
 *
 * Lo que hace: un cuadro editable por pantalla y por estado, con auto-layout,
 * los textos y colores del prototipo, estilos locales (Ruta/…) y las
 * interacciones conectadas — pestañas, cambio de rol, guardar la entrega, pedir
 * más tiempo, resolver una solicitud desde el lado del docente.
 *
 * Lo que no hace: no es una captura del HTML. Reconstruye el diseño con piezas
 * nativas de Figma, así que hay diferencias —las bandas no llegan a los bordes,
 * ni hay sombras ni degradados— y no crea componentes.
 *
 * Regla de oro del auto-layout: primero se añade el nodo al marco y solo
 * después se le puede pedir que ocupe el ancho (FILL). Al revés, Figma lanza un
 * error. Por eso todo pasa por `meter()`.
 */

(async function () {
  'use strict';

  /** @type {any} */
  var datos = DATOS;
  var PALETA = /** @type {Record<string, string>} */ (datos.paleta);

  var PAGINA = 'Ruta · prototipo';
  var ANCHO = 500;   // --shell del prototipo
  var PAD = 16;      // --sp-4

  var PESOS = ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold'];

  var ESTILOS = {
    'h1': { sz: 34, peso: 'SemiBold', lh: 1.2, color: 'fg', ls: -0.5 },
    'h2': { sz: 21, peso: 'SemiBold', lh: 1.3, color: 'fg', ls: -0.5 },
    'h3': { sz: 18, peso: 'Medium', lh: 1.35, color: 'fg', ls: -0.5 },
    'p': { sz: 18, peso: 'Regular', lh: 1.6, color: 'fg' },
    'lead': { sz: 18, peso: 'Regular', lh: 1.6, color: 'muted' },
    'note': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted' },
    'answer': { sz: 20, peso: 'Medium', lh: 1.45, color: 'fg' },
    'brand': { sz: 22, peso: 'SemiBold', lh: 1.3, color: 'fg', ls: -0.5 },
    'brand-meta': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'meta': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'num': { sz: 18, peso: 'Regular', lh: 1.5, color: 'fg', mono: true },
    'record-marks': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'route-num': { sz: 15, peso: 'Regular', lh: 1.5, color: 'muted', mono: true },
    'step-index': { sz: 15, peso: 'Regular', lh: 1.75, color: 'muted', mono: true },
    'group-name': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'fg' },
    'field-title': { sz: 15, peso: 'SemiBold', lh: 1.5, color: 'fg' },
    'time-figure': { sz: 30, peso: 'Light', lh: 1.25, color: 'fg', ls: -0.5 },
    'time-state': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'fg' },
    'time-state-pausado': { sz: 18, peso: 'SemiBold', lh: 1.6, color: 'signalInk' },
    'plain': { sz: 18, peso: 'Regular', lh: 1.6, color: 'fg' },
  };

  var BADGES = {
    done: { fill: 'done', color: 'onSolid', radius: 999, padH: 12, sz: 15, peso: 'Bold' },
    wait: { fill: 'signalTint', color: 'signalInk', radius: 999, padH: 12, sz: 15, peso: 'Bold' },
    blocked: { fill: 'surface2', color: 'fg', radius: 4, padH: 8, sz: 15, peso: 'Bold' },
    todo: { fill: null, color: 'muted', radius: 0, padH: 0, sz: 15, peso: 'Bold' },
  };

  var BOTONES = {
    primary: { fill: 'accent', color: 'onSolid', peso: 'Bold', radio: 8, alto: 52, padH: 24, centrado: true },
    secondary: { fill: 'surface2', color: 'fg', peso: 'Bold', radio: 8, alto: 52, padH: 24, centrado: true },
    option: { fill: null, color: 'fg', peso: 'Medium', radio: 8, alto: 52, padH: 12, centrado: false },
    quiet: { fill: null, color: 'fg', peso: 'Medium', radio: 8, alto: 40, padH: 8, centrado: false },
    switch: { fill: null, color: 'muted', peso: 'Medium', radio: 0, alto: 52, padH: 0, centrado: false },
    tab: { fill: null, color: 'muted', peso: 'Medium', radio: 0, alto: 52, padH: 0, centrado: true },
  };

  // ── fuentes ─────────────────────────────────────────────────────────────

  var fuentesCuerpo = /** @type {Record<string, FontName>} */ ({});
  var fuenteMono = /** @type {FontName|null} */ (null);
  var familiaUsada = '';

  async function cargarPeso(familia, peso) {
    var fuente = { family: familia, style: peso };
    await figma.loadFontAsync(fuente);
    return fuente;
  }

  async function prepararFuentes() {
    var candidatas = ['Oswald', 'Inter'];
    for (var i = 0; i < candidatas.length; i++) {
      var cargadas = /** @type {Record<string, FontName>} */ ({});
      var fallo = false;
      for (var j = 0; j < PESOS.length; j++) {
        try {
          cargadas[PESOS[j]] = await cargarPeso(candidatas[i], PESOS[j]);
        } catch (e) {
          fallo = true;
          break;
        }
      }
      if (!fallo) {
        fuentesCuerpo = cargadas;
        familiaUsada = candidatas[i];
        break;
      }
    }
    if (!fuentesCuerpo.Regular) {
      fuentesCuerpo = { Regular: await cargarPeso('Inter', 'Regular') };
      familiaUsada = 'Inter';
    }
    PESOS.forEach(function (peso) {
      if (!fuentesCuerpo[peso]) { fuentesCuerpo[peso] = fuentesCuerpo.Regular; }
    });

    var monos = ['Roboto Mono', 'JetBrains Mono', 'Source Code Pro', 'Cascadia Mono', 'Inter'];
    for (var k = 0; k < monos.length; k++) {
      try {
        fuenteMono = await cargarPeso(monos[k], 'Regular');
        break;
      } catch (e) { /* se prueba la siguiente */ }
    }
  }

  /** @param {string} peso @param {boolean} [mono] */
  function fuenteDe(peso, mono) {
    if (mono && fuenteMono) { return fuenteMono; }
    return fuentesCuerpo[peso] || fuentesCuerpo.Regular;
  }

  // ── color ───────────────────────────────────────────────────────────────

  function hexARgb(hex) {
    var limpio = String(hex).replace('#', '');
    return {
      r: parseInt(limpio.substring(0, 2), 16) / 255,
      g: parseInt(limpio.substring(2, 4), 16) / 255,
      b: parseInt(limpio.substring(4, 6), 16) / 255,
    };
  }

  /** @returns {Paint[]} */
  function relleno(color) {
    return [{ type: 'SOLID', color: hexARgb(PALETA[color] || color) }];
  }

  /** @param {any[]} runs */
  function textoPlano(runs) {
    return (runs || []).map(function (r) { return r.texto; }).join('');
  }

  // ── piezas base ─────────────────────────────────────────────────────────

  /**
   * Añade un nodo a un marco y, si el marco apila en vertical, le pide que ocupe
   * el ancho. Siempre en ese orden: Figma no deja pedir FILL antes de tener
   * padre con auto-layout.
   * @param {any} padre @param {any} nodo @param {'fill'|'hug'} [ancho]
   */
  function meter(padre, nodo, ancho) {
    padre.appendChild(nodo);
    var vertical = padre.type === 'FRAME' && padre.layoutMode === 'VERTICAL';
    if (vertical && ancho !== 'hug') {
      try {
        if (nodo.type === 'TEXT' || nodo.type === 'FRAME') {
          nodo.layoutSizingHorizontal = 'FILL';
        }
      } catch (e) { /* se queda con su ancho natural */ }
    }
    return nodo;
  }

  /**
   * @param {{dir?: 'VERTICAL'|'HORIZONTAL', gap?: number, pad?: number|number[],
   *          fill?: string|null, radius?: number, ancho?: number,
   *          entreExtremos?: boolean, centrar?: boolean, envolver?: boolean}} opciones
   */
  function marco(opciones) {
    var o = opciones || {};
    var f = figma.createFrame();
    f.layoutMode = o.dir || 'VERTICAL';
    f.primaryAxisSizingMode = 'AUTO';
    f.counterAxisSizingMode = 'FIXED';
    f.itemSpacing = typeof o.gap === 'number' ? o.gap : 0;
    if (typeof o.pad === 'number') {
      f.paddingTop = f.paddingBottom = f.paddingLeft = f.paddingRight = o.pad;
    } else if (Array.isArray(o.pad)) {
      f.paddingTop = o.pad[0]; f.paddingRight = o.pad[1];
      f.paddingBottom = o.pad[2]; f.paddingLeft = o.pad[3];
    }
    if (o.entreExtremos && f.layoutMode === 'HORIZONTAL') {
      f.primaryAxisAlignItems = 'SPACE_BETWEEN';
    }
    if (o.centrar) { f.counterAxisAlignItems = 'CENTER'; }
    if (o.envolver && f.layoutMode === 'HORIZONTAL') { f.layoutWrap = 'WRAP'; }
    f.fills = o.fill === null || o.fill === undefined ? [] : relleno(o.fill);
    f.cornerRadius = typeof o.radius === 'number' ? o.radius : 0;
    f.clipsContent = false;
    if (typeof o.ancho === 'number') { f.counterAxisSizingMode = 'FIXED'; f.resize(o.ancho, f.height); }
    return f;
  }

  /** Aplica los tramos monoespaciados y en negrita que trae el HTML. */
  function marcarTramos(nodo, runs) {
    var desde = 0;
    (runs || []).forEach(function (r) {
      var hasta = desde + r.texto.length;
      if (r.mono && fuenteMono) { nodo.setRangeFontName(desde, hasta, fuenteMono); }
      if (r.negrita) { nodo.setRangeFontName(desde, hasta, fuenteDe('Bold', false)); }
      desde = hasta;
    });
  }

  /**
   * @param {any[]} runs @param {string} estilo
   * @param {{mono?: boolean, color?: string, alineado?: 'LEFT'|'CENTER', peso?: string}} [extra]
   */
  function texto(runs, estilo, extra) {
    var e = extra || {};
    var def = ESTILOS[estilo] || ESTILOS['p'];
    var mono = e.mono || def.mono || false;
    var nodo = figma.createText();
    nodo.fontName = fuenteDe(e.peso || def.peso, mono);
    nodo.characters = textoPlano(runs) || ' ';
    nodo.fontSize = def.sz;
    nodo.lineHeight = { unit: 'PERCENT', value: def.lh * 100 };
    if (def.ls) { nodo.letterSpacing = { unit: 'PERCENT', value: def.ls }; }
    nodo.fills = relleno(e.color || def.color);
    nodo.textAutoResize = 'HEIGHT';
    if (e.alineado) { nodo.textAlignHorizontal = e.alineado; }
    marcarTramos(nodo, runs);
    return nodo;
  }

  function subrayar(nodo) {
    var largo = nodo.characters.length;
    nodo.setRangeTextDecoration(0, largo, 'UNDERLINE');
    nodo.setRangeTextDecorationThickness(0, largo, { value: 3, unit: 'PIXELS' });
    nodo.setRangeTextDecorationOffset(0, largo, { value: 6, unit: 'PIXELS' });
    nodo.setRangeTextDecorationColor(0, largo, nodo.fills[0]);
  }

  function badge(b) {
    var def = BADGES[b.k] || BADGES.todo;
    var caja = marco({ dir: 'HORIZONTAL', fill: def.fill, radius: def.radius,
                       centrar: true });
    caja.paddingLeft = caja.paddingRight = def.padH;
    caja.paddingTop = caja.paddingBottom = 3;
    var etiqueta = texto(b.runs, 'note', { color: def.color, peso: def.peso });
    etiqueta.fontSize = def.sz;
    caja.appendChild(etiqueta);
    return caja;
  }

  /** Fila de marcas, con salto de línea si no caben. */
  function filaMarcas(padre, lista, ancho) {
    var fila = marco({ dir: 'HORIZONTAL', gap: 8, centrar: true, envolver: true });
    meter(padre, fila, ancho);
    (lista || []).forEach(function (x) { fila.appendChild(badge(x)); });
    return fila;
  }

  /** Un botón o un control. Se registra solo, para conectar sus acciones luego. */
  function boton(b) {
    var def = BOTONES[b.k] || BOTONES.option;
    var caja = marco({ dir: 'HORIZONTAL', fill: def.fill, radius: def.radio,
                       centrar: true });
    caja.counterAxisSizingMode = 'FIXED';
    caja.paddingLeft = caja.paddingRight = def.padH;
    caja.resize(caja.width, def.alto);
    var activo = !!b.activo;
    var color = activo ? 'fg' : def.color;
    var etiqueta = texto(b.runs, b.k === 'tab' ? 'note' : 'p', {
      color: color,
      peso: activo ? 'SemiBold' : def.peso,
      alineado: def.centrado ? 'CENTER' : 'LEFT',
    });
    etiqueta.fontSize = b.k === 'tab' ? 15 : 18;
    etiqueta.lineHeight = { unit: 'PERCENT', value: (b.k === 'tab' ? 1.5 : 1.6) * 100 };
    if (activo || b.k === 'quiet') { subrayar(etiqueta); }
    caja.appendChild(etiqueta);
    registrar(caja, b.acciones);
    return caja;
  }

  // ── dibujo de bloques ───────────────────────────────────────────────────

  /** @param {any} padre @param {any} b */
  function dibujar(padre, b) {
    if (b.t === 'texto') {
      meter(padre, texto(b.runs, b.estilo));
      return;
    }

    if (b.t === 'marcas') {
      filaMarcas(padre, b.badges, 'fill');
      return;
    }

    if (b.t === 'boton') {
      meter(padre, boton(b), b.k === 'quiet' ? 'hug' : 'fill');
      return;
    }

    if (b.t === 'campo') {
      var campo = marco({ dir: 'VERTICAL', gap: 8 });
      meter(padre, campo, 'fill');
      if (b.runs && b.runs.length) { meter(campo, texto(b.runs, 'field-title')); }
      if (b.caja) {
        var caja = marco({ dir: 'VERTICAL', fill: 'surface1', radius: 8 });
        caja.paddingLeft = caja.paddingRight = 16;
        caja.paddingTop = caja.paddingBottom = 12;
        meter(campo, caja, 'fill');
        // el alto del campo de la reseña viene del prototipo (min-height 220 px)
        caja.minHeight = textoPlano(b.caja).length > 40 ? 220 : 52;
        if (textoPlano(b.caja).length) {
          meter(caja, texto(b.caja, 'p'));
        }
      }
      if (b.nota && b.nota.length) { meter(campo, texto(b.nota, 'note')); }
      if (b.conmutador && b.conmutador.length) {
        var grupo = marco({ dir: 'HORIZONTAL', gap: 24 });
        meter(campo, grupo, 'fill');
        b.conmutador.forEach(function (o) {
          grupo.appendChild(boton({ k: 'switch', runs: o.runs, activo: o.activo,
                                    acciones: o.acciones }));
        });
      }
      return;
    }

    if (b.t === 'barra') {
      var barra = marco({ dir: 'HORIZONTAL', fill: 'surface2', radius: 999 });
      barra.counterAxisSizingMode = 'FIXED';
      meter(padre, barra, 'fill');
      barra.resize(ANCHO - PAD * 2, 14);
      var avance = marco({ dir: 'HORIZONTAL', fill: b.baja ? 'signal' : 'fg', radius: 999 });
      avance.counterAxisSizingMode = 'FIXED';
      avance.resize(Math.max(2, (ANCHO - PAD * 2) * b.pct / 100), 14);
      barra.appendChild(avance);
      return;
    }

    if (b.t === 'capa' || b.t === 'banda') {
      var esBanda = b.t === 'banda';
      var caja2 = marco({
        dir: 'VERTICAL',
        gap: esBanda ? 12 : 12,
        fill: esBanda ? 'surface1' : null,
        pad: esBanda ? 16 : 0,
      });
      meter(padre, caja2, 'fill');
      (b.hijos || []).forEach(function (hijo) { dibujar(caja2, hijo); });
      return;
    }

    if (b.t === 'ruta') {
      var ruta = marco({ dir: 'VERTICAL', gap: 32 });
      meter(padre, ruta, 'fill');
      (b.items || []).forEach(function (item) {
        var caja3 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(ruta, caja3, 'fill');
        if (item.bloqueado) {
          caja3.fills = relleno('surface1');
          caja3.paddingTop = caja3.paddingBottom = 16;
          caja3.paddingLeft = caja3.paddingRight = 16;
        }
        var cabeza = marco({ dir: 'HORIZONTAL', gap: 12, entreExtremos: true });
        meter(caja3, cabeza, 'fill');
        var izquierda = marco({ dir: 'VERTICAL', gap: 4 });
        cabeza.appendChild(izquierda);
        meter(izquierda, texto(item.num, 'route-num'));
        meter(izquierda, texto(item.titulo, 'h3'));
        if (item.badges && item.badges.length) {
          filaMarcas(cabeza, item.badges, 'hug');
        }
        if (item.nota && item.nota.length) { meter(caja3, texto(item.nota, 'note')); }
        if (item.motivo && item.motivo.length) { meter(caja3, texto(item.motivo, 'p')); }
      });
      return;
    }

    if (b.t === 'grupo') {
      var grupo2 = marco({ dir: 'VERTICAL', gap: 24 });
      meter(padre, grupo2, 'fill');
      (b.filas || []).forEach(function (fila) {
        var caja4 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(grupo2, caja4, 'fill');
        if (fila.propia) {
          caja4.fills = relleno('surface1');
          caja4.paddingTop = caja4.paddingBottom = 12;
          caja4.paddingLeft = caja4.paddingRight = 16;
        }
        if (fila.nombre && fila.nombre.length) {
          meter(caja4, texto(fila.nombre, 'group-name'));
        }
        if (fila.badges && fila.badges.length) { filaMarcas(caja4, fila.badges, 'fill'); }
        (fila.notas || []).forEach(function (nota) {
          meter(caja4, texto(nota, 'record-marks'));
        });
        (fila.botones || []).forEach(function (btn) {
          meter(caja4, boton(btn), 'fill');
        });
      });
      return;
    }

    if (b.t === 'pasos') {
      var pasos = marco({ dir: 'VERTICAL', gap: 32 });
      meter(padre, pasos, 'fill');
      (b.items || []).forEach(function (item) {
        var fila2 = marco({ dir: 'HORIZONTAL', gap: 16 });
        meter(pasos, fila2, 'fill');
        var indice = marco({ dir: 'VERTICAL' });
        indice.resize(24, indice.height);
        fila2.appendChild(indice);
        meter(indice, texto([{ texto: item.indice, mono: true }], 'step-index'));
        var cuerpo = marco({ dir: 'VERTICAL', gap: 8 });
        meter(fila2, cuerpo, 'fill');
        meter(cuerpo, texto(item.titulo, 'h2'));
        if (item.nota && item.nota.length) { meter(cuerpo, texto(item.nota, 'note')); }
        if (item.badges && item.badges.length) { filaMarcas(cuerpo, item.badges, 'fill'); }
      });
      return;
    }

    if (b.t === 'registros') {
      var registros = marco({ dir: 'VERTICAL', gap: 24 });
      meter(padre, registros, 'fill');
      (b.items || []).forEach(function (item) {
        var caja5 = marco({ dir: 'VERTICAL', gap: 8 });
        meter(registros, caja5, 'fill');
        if (item.badges && item.badges.length) { filaMarcas(caja5, item.badges, 'fill'); }
        (item.notas || []).forEach(function (nota) {
          meter(caja5, texto(nota, 'record-marks'));
        });
      });
      return;
    }

    if (b.t === 'hechos') {
      var hechos = marco({ dir: 'VERTICAL', gap: 16 });
      meter(padre, hechos, 'fill');
      (b.items || []).forEach(function (item) {
        var caja6 = marco({ dir: 'VERTICAL', gap: 4 });
        meter(hechos, caja6, 'fill');
        meter(caja6, texto(item.dt, 'field-title'));
        meter(caja6, texto(item.dd, item.plano ? 'plain' : 'record-marks'));
      });
      return;
    }

    meter(padre, texto([{ texto: '[bloque sin dibujar: ' + b.t + ']' }], 'note'));
  }

  // ── interacciones ───────────────────────────────────────────────────────

  /** @type {Record<string, any>} */ var marcos = {};
  /** @type {Record<string, any[]>} */ var conectables = {};
  /** @type {Record<string, string>} */ var porPestanaYrol = {};
  /** @type {any[]} */ var pendientes = [];

  /** @param {any} nodo @param {any} acciones */
  function registrar(nodo, acciones) {
    if (acciones && Object.keys(acciones).length) {
      pendientes.push({ nodo: nodo, acciones: acciones });
    }
  }

  function porPestana(pestana, rol) {
    return porPestanaYrol[pestana + '|' + rol] || null;
  }

  /** El conmutador de conexión dice si el teléfono tiene señal en esta pantalla. */
  function estadoConexion(p) {
    var enLinea = true;
    (function recorrer(bloques) {
      (bloques || []).forEach(function (b) {
        (b.conmutador || []).forEach(function (o) {
          var acc = o.acciones || {};
          if (acc['data-action'] === 'conexion' && o.activo) {
            enLinea = acc['data-en-linea'] === 'si';
          }
        });
        if (b.hijos) { recorrer(b.hijos); }
      });
    })(p.contenido);
    return enLinea;
  }

  /** A dónde lleva cada acción del prototipo. */
  function destino(p, acc, enLinea) {
    if (!acc) { return null; }
    var accion = acc['data-action'];
    if (accion === 'pantalla') {
      return porPestana(acc['data-pantalla'], p.rol) || porPestana(acc['data-pantalla'], 'estudiante');
    }
    if (accion === 'rol') { return porPestana(p.pestana, acc['data-rol']); }
    if (accion === 'conexion') {
      if (acc['data-en-linea'] === 'si') {
        return p.id === 'entrega-estudiante-guardado-sin-senal'
          ? 'entrega-estudiante-entregado-dos-marcas'
          : p.id;
      }
      return 'entrega-estudiante-guardado-sin-senal';
    }
    if (accion === 'guardar') {
      if (p.id === 'entrega-estudiante-guardado-sin-senal') {
        return 'entrega-estudiante-entregado-dos-marcas';
      }
      return enLinea ? 'entrega-estudiante-entregado-dos-marcas'
                     : 'entrega-estudiante-guardado-sin-senal';
    }
    if (accion === 'motivos') { return 'tiempo-estudiante-motivos-abierto'; }
    if (accion === 'motivo') {
      return acc['data-motivo'] === 'conexion'
        ? 'tiempo-estudiante-solicitud-resuelta'
        : 'tiempo-docente';
    }
    if (accion === 'sumar-docente') { return 'tiempo-docente-solicitud-resuelta'; }
    if (accion === 'reiniciar') { return 'entrega-estudiante'; }
    return null;
  }

  // ── una pantalla completa ───────────────────────────────────────────────

  function construir(p) {
    pendientes = [];
    var raiz = marco({ dir: 'VERTICAL', fill: 'bg', ancho: ANCHO });
    raiz.name = p.titulo;

    var cabecera = marco({ dir: 'VERTICAL', gap: 16, fill: 'bg', pad: [24, PAD, 16, PAD] });
    meter(raiz, cabecera, 'fill');
    var marcaFila = marco({ dir: 'HORIZONTAL', gap: 12, entreExtremos: true });
    meter(cabecera, marcaFila, 'fill');
    meter(marcaFila, texto(p.cabecera.marca, 'brand'), 'hug');
    meter(marcaFila, texto(p.cabecera.meta, 'brand-meta'), 'hug');
    var roles = marco({ dir: 'HORIZONTAL', gap: 24 });
    cabecera.appendChild(roles);
    (p.cabecera.roles || []).forEach(function (o) {
      roles.appendChild(boton({ k: 'switch', runs: o.runs, activo: o.activo,
                                acciones: o.acciones }));
    });

    var contenido = marco({ dir: 'VERTICAL', gap: 48, fill: 'bg', pad: [8, PAD, 64, PAD] });
    meter(raiz, contenido, 'fill');
    (p.contenido || []).forEach(function (b) { dibujar(contenido, b); });

    var tabs = marco({ dir: 'HORIZONTAL', gap: 16, fill: 'bg', pad: [12, PAD, 12, PAD] });
    meter(raiz, tabs, 'fill');
    (p.tabs || []).forEach(function (t) {
      var nodo = boton({ k: 'tab', runs: t.runs, activo: t.activo, acciones: t.acciones });
      tabs.appendChild(nodo);
      nodo.layoutSizingHorizontal = 'FILL';
      var etiqueta = nodo.children[0];
      if (etiqueta && etiqueta.type === 'TEXT') {
        etiqueta.layoutSizingHorizontal = 'FILL';
        etiqueta.textAlignHorizontal = 'CENTER';
      }
    });

    var pie = marco({ dir: 'VERTICAL', gap: 16, fill: 'bg', pad: [48, PAD, 64, PAD] });
    meter(raiz, pie, 'fill');
    if (p.pie.nota && p.pie.nota.length) { meter(pie, texto(p.pie.nota, 'note')); }
    if (p.pie.boton) { meter(pie, boton(p.pie.boton), 'hug'); }

    conectables[p.id] = pendientes.slice();
    return raiz;
  }

  // ── estilos locales del documento ───────────────────────────────────────

  async function crearEstilos() {
    try {
      var pinturas = await figma.getLocalPaintStylesAsync();
      if (!pinturas.some(function (s) { return s.name.indexOf('Ruta/color/') === 0; })) {
        Object.keys(PALETA).forEach(function (nombre) {
          var estilo = figma.createPaintStyle();
          estilo.name = 'Ruta/color/' + nombre;
          estilo.paints = relleno(nombre);
        });
      }
    } catch (e) {
      figma.notify('No pude crear los estilos de color: ' + e.message, { error: true });
    }
    try {
      var textos = await figma.getLocalTextStylesAsync();
      if (!textos.some(function (s) { return s.name.indexOf('Ruta/texto/') === 0; })) {
        Object.keys(ESTILOS).forEach(function (nombre) {
          var def = ESTILOS[nombre];
          var estilo = figma.createTextStyle();
          estilo.name = 'Ruta/texto/' + nombre;
          estilo.fontName = fuenteDe(def.peso, def.mono);
          estilo.fontSize = def.sz;
          estilo.lineHeight = { unit: 'PERCENT', value: def.lh * 100 };
        });
      }
    } catch (e) {
      figma.notify('No pude crear los estilos de texto: ' + e.message, { error: true });
    }
  }

  // ── montaje ─────────────────────────────────────────────────────────────

  function colocar(cuadros) {
    var columnas = 4;
    var x = 0;
    var y = 0;
    var alto = 0;
    cuadros.forEach(function (f, i) {
      if (i % columnas === 0) {
        x = 0;
        y = y + alto + 160;
        alto = 0;
      }
      f.x = x;
      f.y = y;
      alto = Math.max(alto, f.height);
      x = x + ANCHO + 160;
    });
  }

  async function principal() {
    await prepararFuentes();
    await crearEstilos();

    try {
      await figma.loadAllPagesAsync();
    } catch (e) { /* sin eso, igual se puede crear la página */ }
    try {
      figma.root.children
        .filter(function (p) { return p.name === PAGINA; })
        .forEach(function (p) { p.remove(); });
    } catch (e) {
      figma.notify('No pude borrar la página anterior: ' + e.message, { error: true });
    }

    var pagina = figma.createPage();
    pagina.name = PAGINA;
    await figma.setCurrentPageAsync(pagina);

    var todos = datos.pantallas.concat(datos.estados);
    datos.pantallas.forEach(function (p) {
      porPestanaYrol[p.pestana + '|' + p.rol] = p.id;
    });

    var enLinea = /** @type {Record<string, boolean>} */ ({});
    todos.forEach(function (p) {
      var marcoPantalla = construir(p);
      pagina.appendChild(marcoPantalla);
      marcos[p.id] = marcoPantalla;
      enLinea[p.id] = estadoConexion(p);
    });

    var cuadros = todos.map(function (p) { return marcos[p.id]; });
    colocar(cuadros);

    var aviso = figma.createText();
    aviso.fontName = fuenteDe('Regular');
    aviso.characters = 'Prototipo «Ruta» · ' + datos.pantallas.length + ' pantallas y '
      + datos.estados.length + ' estados.\n'
      + 'Recórrelo: selecciona el cuadro 1 y pulsa Presentar (▶). Las pestañas, el '
      + 'cambio de rol y los botones ya navegan entre cuadros.\n'
      + 'Familia tipográfica: ' + familiaUsada + '.';
    aviso.fontSize = 20;
    aviso.fills = relleno('muted');
    aviso.textAutoResize = 'WIDTH_AND_HEIGHT';
    pagina.appendChild(aviso);
    aviso.x = 0;
    aviso.y = -140;

    todos.forEach(function (p, i) {
      var etiqueta = figma.createText();
      etiqueta.fontName = fuenteDe('Regular');
      etiqueta.characters = (i + 1) + ' · ' + p.titulo;
      etiqueta.fontSize = 14;
      etiqueta.fills = relleno('muted');
      etiqueta.textAutoResize = 'WIDTH_AND_HEIGHT';
      pagina.appendChild(etiqueta);
      etiqueta.x = marcos[p.id].x;
      etiqueta.y = marcos[p.id].y - 30;
    });

    var conexiones = 0;
    var sinDestino = 0;
    todos.forEach(function (p) {
      (conectables[p.id] || []).forEach(function (registro) {
        var destinoId = destino(p, registro.acciones, enLinea[p.id]);
        var marcoDestino = destinoId ? marcos[destinoId] : null;
        if (!marcoDestino) { sinDestino = sinDestino + 1; return; }
        conexiones = conexiones + 1;
        registro.nodo.setReactionsAsync([{
          trigger: { type: 'ON_CLICK' },
          actions: [{
            type: 'NAVIGATE',
            destinationId: marcoDestino.id,
            navigation: 'NAVIGATE',
            transition: { type: 'DISSOLVE', easing: { type: 'EASE_IN_AND_OUT' }, duration: 0.2 },
            preserveScrollPosition: false,
          }],
        }]);
      });
    });

    figma.viewport.scrollAndZoomIntoView(cuadros);
    figma.notify('«Ruta» construido: ' + cuadros.length + ' cuadros, ' + conexiones
      + ' conexiones' + (sinDestino ? ' (' + sinDestino + ' sin destino)' : '')
      + '. Tipografía: ' + familiaUsada + '.');
    figma.closePlugin();
  }

  principal().catch(function (e) {
    figma.notify('No pude construir el prototipo: ' + e.message, { error: true });
    figma.closePlugin();
  });
})();
