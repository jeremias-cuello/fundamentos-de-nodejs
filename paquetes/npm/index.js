const isOdd = require('is-odd');

console.log(isOdd(1)); // true
console.log(isOdd(2)); // false

/**
 * is-odd depende de is-number, es otro paquete que verifica si un numero
 * no es un numero, si no es infinito, si el tipo de datos es number, etc.
 *
 * por otro lado is-odd verifica si el numero es un numero, si en un entero,
 * si es un enteroseguro, etc.
 *
 * si se requiere de is-odd tambien se requiere de is-number.
 */

const isEven = require('is-even');

/**
 * is-even funciona casi igual que is-odd, al inverso. tambien requiere de
 * is-number al igual que is-odd, pero no lo hace explicitamente. depende de
 * is-odd que depende de is-number. is-even se ahorra el trabajo de importar is-number
 * e importa is-odd para depender implicitamente de is-number. el codigo de is-even es:
 *
 * var isOdd = require('is-odd');
 *	module.exports = function isEven(i) {
 * 	return !isOdd(i);
 * };
 *
 * esto es asi porque is-even se ahorra el trabajo de verificar si es un entero,
 * un entero seguro, si es un numero, etc
 *
 */

console.log(isEven(1)); // false
console.log(isEven(2)); // true

/**
 * package.json es un archivo que contiene informacion de los paquetes por individual
 */

/**
 * links:
 *   https://www.npmjs.com/package/is-odd
 *   https://www.npmjs.com/package/is-even
 */
