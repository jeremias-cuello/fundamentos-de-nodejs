/* un buffer es un monton de datos y un stream es un proceso con muchos datos */

const { Buffer } = require("buffer");

let buffer = Buffer.alloc(10); // crea un buffer de 10 bytes

// console.log(Buffer);
// console.log(buffer);
buffer[5] = 65;
buffer[3] = 'a';
console.log(buffer); // se muestra en hexadecimal
console.log(buffer.toString());

buffer[0] = 2;
buffer[9] = 255;
console.log(buffer); // se muestra en hexadecimal
console.log(buffer.toString());

console.log('Buffer.byteLength(buffer): ' + Buffer.byteLength(buffer));
console.log('buffer.byteLenght: ' + buffer.byteLength);

console.log('-----');

// crea un buffer y lo llena del arreglo que le pongamos como parametro
buffer = Buffer.from([2, 0, 0, 0x61, 97, 65, 0, '@'.charCodeAt(), 255]);
console.log(buffer);
console.log(buffer.toString());

buffer = Buffer.from('Hola');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.byteLength);

console.log('---------- abecedario ------------');

let bufferAbc = Buffer.alloc(26);
let i = 65;
let abc = bufferAbc.map(e => e + i++);

console.log(bufferAbc);
console.log(abc);
console.log(abc.toString());
