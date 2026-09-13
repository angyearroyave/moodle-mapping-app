/* armar.js — une datos.js + motor.js en code.js, que es lo que Figma carga.
   Un plugin de Figma no tiene módulos: todo tiene que estar en un solo archivo.

   Uso: node armar.js    (o npm run armar) */

const fs = require('fs');
const path = require('path');

const carpeta = __dirname;
const datos = fs.readFileSync(path.join(carpeta, 'datos.js'), 'utf8');
const motor = fs.readFileSync(path.join(carpeta, 'motor.js'), 'utf8');

const cabecera = [
  '// GENERADO por armar.js (datos.js + motor.js) — no editar a mano.',
  '// Los datos vienen de tools/html_a_figma.py; el dibujo, de motor.js.',
  '',
].join('\n');

fs.writeFileSync(path.join(carpeta, 'code.js'), cabecera + datos + '\n' + motor, 'utf8');

const kb = (t) => (Buffer.byteLength(t, 'utf8') / 1024).toFixed(0) + ' kB';
console.log('code.js escrito: ' + kb(cabecera + datos + motor)
  + ' (datos ' + kb(datos) + ' + motor ' + kb(motor) + ')');
