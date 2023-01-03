/**
 * son un paso de datos de un punto a otro. hay tres tipos de streams
 * de lectura: es un stream donde va soltando datos desde el origen y el destino los agarra.
 * de escritura: es donde el destino mete datos al origen.
 * bidireccional: escirtura y lectura simultanea.
 */

const fs = require('fs');

let data = '';
const path = __dirname + '\\input.txt';

let redeableStream = fs.createReadStream(path);
redeableStream.setEncoding('utf8');

redeableStream.on('data', (chunk) => {
	data += chunk;
});
redeableStream.on('end', (chunk) => {
	console.log(data);
});

console.log('data:');
console.log(data); // nada porque todavia no se setio, los eventos data y end son asincronos
