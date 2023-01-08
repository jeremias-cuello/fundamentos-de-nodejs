
/**
 * ejecutar:
 * npm init -y
 *
 * cuando seteamos a "módulo", el atributo "type" permite que un paquete (es6)
 * especifique todos los archivos .js dentro de los módulos ES. Si no se especifica
 * "tpe" o se setea a "commonjs", todos los archivos .js se tratan como CommonJS
 */

import modulo from "./modulo.mjs"; // SyntaxError: Cannot use import statement outside a module

modulo.saludar();
console.log(modulo.prop1);
console.log(modulo.prop2);
