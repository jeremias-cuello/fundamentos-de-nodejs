
/**
 * ejecutar:
 * npm init -y
 *
 * cuando seteamos a "module", el atributo "type" permite que un paquete (es6)
 * especifique todos los archivos .js dentro de los módulos ES. Si no se especifica
 * "type" o se setea a "commonjs", todos los archivos .js se tratan como CommonJS
 */

// modulo sera todo lo que el modulo exporta tanto el objeto defecto como los demas
import * as modulo from "./modulo.mjs";

// module sera el objeto que el modulo exporta por defecto
import modulo2 from "./modulo.mjs";

// import moduloSinDefault from "./sin-default.js"; // error porque no tiene propiedades por defecto
import * as moduloSinDefault from "./sin-default.js";

// en la desestructuracion se debe poner el nombre o alias de la propiedad del modulo igual que en la importacion
// si se le quiere cambiar el nombre se le pone un alias
import { propiedad3, obj as objetoNuevo } from "./modulo.mjs";

// solo se puede desestructurar los objetos que estan "sueltos" no los que estan en default
// import { prop1 } from "./modulo.mjs";

// ejecuta el codigo de ./modulo.mjs
import "./modulo.mjs";

const condition = true;
if (condition) {
  import("./modulo.mjs") // solo se carga el modulo si se cumple la condicion // asincorno // import dinamico
    .then(module => module.default.saludar()); // code splitting // ejecutar paquetes de codigo a pedido.
		// suele usarse para reducir la carga de codigo inicial
}

const filename = "modulo";
import(`./${filename}.mjs`)
  .then(module => module.default.saludar());

modulo.default.saludar();
console.log(modulo.default.prop1);
console.log(modulo.default.prop2);
console.log(modulo.prop3); // undefined
console.log(modulo.propiedad3);
console.log(modulo);

console.log(objetoNuevo);
console.log(propiedad3);

console.log(modulo2.prop1);
console.log(modulo2.prop2);
modulo2.saludar();
// console.log(module.default.prop1); // error
console.log(modulo2.propiedad3); // undefined

console.log(moduloSinDefault.nombre);
console.log(moduloSinDefault.pi);
