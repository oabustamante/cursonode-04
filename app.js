// 1
/*
const fs = require('fs');

const base = 5;
let result = '';

console.clear();
console.log('====================');
console.log(' Base: ', base);
console.log('====================');


for(let i = 1; i <= 10; i++) {
    console.log(`${i} x ${base} = ${ i * 5}`);
    result += `${i} x ${base} = ${ i * 5}\n`;
}

fs.writeFileSync(`Tabla-${base}.txt`, result);
console.log(`Tabla del ${base} creada.`);
*/

// 2
/*
const { crearArchivo } = require('./helpers/multiplicar');
//import { crearArchivo } from './helpers/multiplicar';

console.clear();
const base = 3;
crearArchivo(base)
    .then(res => console.log(res))
    .catch(rej => console.log(rej));
*/

// 3 Utilizando yargs para leer parámetros de consola
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivoListar(argv.b, argv.l, argv.h)
    .then(res => console.log(res))
    .catch(rej => console.log(rej));

