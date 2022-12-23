/**
 * cuando tengamos plugins o modulos un poco mas avanzados que puedan sobreescribir la consola por defecto,
 * para que tengas logs por un lado, informacion por otra, erorres por otro, y asi sucesivamente
 */

console.log('un log'); // imprime un log, procesos
console.info('un info'); // imprime una informacion, para loguear de que el programa corrio por este camino
console.error('un error'); // imprime un error
console.warn('un warning'); // imprime una advertencia

/** cada objeto es un fila, si hay algun atributo que no se corresponda con los otros,
 * se crea una columna la informacion del atributo incorrespondiente a los otros se colocará
 * en la fila segun el orden del objeto en el que esta
 */
var tabla = [
	{
		c1: "Esto",
		c2: "es",
		c3: "una",
		c4: "fila"
	},
	{
		c1: "Esta",
		c2: "es otra",
		c3: "fila",

		Y: 2 + 2
	}
];
console.table(tabla);

console.group("conversacion")
	console.log('Hola');
	console.group("bla")
		console.log('bla bla');
		console.log('bla bla');
		console.log('bla bla');
	console.groupEnd("bla");
	console.log('adios');
console.groupEnd("conversacion")
console.log('otras cosas de otra funcion');

// ejemplo de console.group

const function1 = () => {
	console.group('Funcion 1');
	console.log('esto es de la Funcion 1');
	function2();
	console.log('esto es de la Funcion 1 tambien');
	console.groupEnd('Funcion 1');
}
const function2 = () => {
	console.group('Funcion 2');
	console.log('esto es de la Funcion 2');
	console.log('esto es de la Funcion 2 tambien');
	console.groupEnd('Funcion 2');
}

console.log();
console.log('empezamos');
function1();
console.log('terminamos');
console.log();

// para contar cuantas veces aparecio la palabra veces. Por ejemplo cuantas veces paso un error, etc.
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces'); // resetea el contador
console.count('veces');
console.count('veces');

console.count('bla bla');

for (let index = 1; index <= 5; index++) {
	console.count('iterando');
}
