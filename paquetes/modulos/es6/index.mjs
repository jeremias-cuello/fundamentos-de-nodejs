// cuando un archivo tiene la extension .msj NodeJS ya trata a este archivo con una sintaxis ES ("type": "module")
// hay otra sintaxis que es la "type": "commonJS" que es con la que trata node con archivos .js
// si queres usar la sintaxis ES con archivo .js debes agregar el atributo "type": "module" en tu package.json
import modulo from "./modulo.mjs";

modulo.saludar();
console.log(modulo.prop1);
console.log(modulo.prop2);
