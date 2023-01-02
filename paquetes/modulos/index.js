// traer nuestro modulo
const modulo = require('./modulo'); // como es archivo javascript no hace falta aclarar extension

// ejecutar una funcion del modulo
console.group('modulo:');
	console.log(modulo);
console.groupEnd('modulo:');

console.group('modulo.saludar(): ');
	modulo.saludar();
console.groupEnd('modulo.saludar(): ');

console.group('modulo.property_1: ');
	console.log(modulo.property_1);
console.groupEnd('modulo.property_1: ');

console.group('modulo.property_2: ');
	console.log(modulo.property_2);
console.groupEnd('modulo.property_2: ');
