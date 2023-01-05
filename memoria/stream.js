/**
 * son un paso de datos de un punto a otro. hay tres tipos de streams
 * de lectura: es un stream donde va soltando datos desde el origen y el destino los agarra.
 * de escritura: es donde el destino mete datos al origen.
 * bidireccional: escirtura y lectura simultanea.
*/

const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
const path = __dirname + '\\input.txt';

let redeableStream = fs.createReadStream(path);
redeableStream.setEncoding('utf8');

/*
redeableStream.on('data', (chunk) => {
	data += chunk;
});
redeableStream.on('end', (chunk) => {
	console.log(data);
});
*/

console.log('data:');
console.log(data); // nada porque todavia no se setio, los eventos data y end son asincronos

console.log('-------------------------------------');

process.stdout.write('Mi');
process.stdout.write('nombre');
process.stdout.write('es');
process.stdout.write('jere'); // process.stdout es un buffer del sistema. el metodo write escribe en él.
console.log();

const Transform = stream.Transform;

function Mayus() {
	Transform.call(this); // llama al constructor Transform
}

util.inherits(Mayus, Transform);

// Transform tiene un metodo _transform declarado sin implementar, porque sin implementar?,
// porque esta diseñado para que veas que necesita como parametros y para que hagas tus cosas sobre ese metodo.
// que pasa? _transform hace cosas con los Stream Duplex para transformar los chunk. entonces a provechamos esas
// cosas que hace _tranform, aprovechamos la capacidad que puede hacer. esta sin implementar a secas porque esta a
// espera de que se pise con un metodo nativo que hagas vos. como lo haces? con herencia prototipal.

// se debe llamar _transform para que se pise con el metodo heredado de Transform
Mayus.prototype._transform = function (chunk, codif, cb) {
	chunkMayus = chunk.toString().toUpperCase();
	this.push(chunkMayus);
	cb();
}

let mayus = new Mayus();

// pipe es un tecnica en informatica que consiste en ir transformando el flujo de datos de entrada pasandolo por
// procesos secuenciales donde cada entrada de ellos es la salida del anterior.
// data → [dataProcessed] → [dataProcessed] → [dataProcessed] → output

let i = 0;

process.stdout.on('pipe', (src) => {
	console.log('algo esta llegando a process.stdout.');
	// console.log(src); // objecto mayus
});

redeableStream // data
	.pipe(mayus) // data processed
	.pipe(process.stdout);

// pipe es una funcion que sirve para agregarle un destino al flujo de datos de entrada
// redeableStream pasa por el proceso mayus luego por la salida process.stdout
