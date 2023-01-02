// traer nuestro modulo
const modulo = require('./modulo'); // como es archivo javascript no hace falta aclarar extension

// ejecutar una funcion del modulo
console.group('modulo:');
	console.log(modulo);
console.groupEnd('modulo:');

console.group('modulo(): ');
	modulo();
console.groupEnd('modulo(): ');

console.group('modulo.call(): ');
	modulo.call();
console.groupEnd('modulo.call(): ');
