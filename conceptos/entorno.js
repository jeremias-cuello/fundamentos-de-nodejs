let nombredie = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

// la nomenclatura de las variables de entorno es una combinacion de UPPERCASE con snake_case

// en Linux
// $ NOMBER=Jeremias node conceptos/entorno.js

// para inicializar las variables de entorno en Windows es
// powershell: $env:NOMBRE="Carlos"
// powershell: node conceptos/entorno.js


console.log('imprimiendo otra cosas');
