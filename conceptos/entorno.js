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

// pm2 y nodemon son herramientas para ser mas felices
// nodemon es una herramiente para el desarrollo, cada vez que detecte un
// cambio en el programa o algun cambio en las dependencias de la misma,
// se ejecuta automaticamente
// pm2 es una herramienta para el monitoreo de una app, se utiliza
// generalmente cuando la pp esta en produccion
