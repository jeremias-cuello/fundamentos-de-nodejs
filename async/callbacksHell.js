function hola(nombreHola, miCallback){
	setTimeout(() => {
		console.log(`Hola, ${nombreHola}`);
		miCallback(nombreHola); // compartiendo parametro
	}, 1500);
}

function hablar(callbackHablar){
	setTimeout(function(){
		console.log('Bla Bla Bla Bla...');
		callbackHablar();
	}, 1000)
}

function adios(nombre, otroCallback){
	setTimeout(() => {
		console.log(`Adios ${nombre}`);
		otroCallback();
	}, 1000);
}

function conversacion(nombre, veces, callback) {
	if (veces >= 1) {
		hablar(function () {
			conversacion(nombre, --veces, callback);
		});
	}	else {
		adios(nombre, callback);
	}
}

console.log('iniciando proceso');
hola("Jeremias", (nombre) => {
	conversacion(nombre, 5, () => {
		console.log('Proceso terminado');
	});
})

// hola("Jeremias", (nombre) => {
// 	hablar(() => {
// 		hablar(() => {
// 			hablar(() => {
// 				adios(nombre, function () {
// 					console.log('terminando el proceso');
// 				});
// 			});
// 		});
// 	});
// });

/**
 * buenas practicas son:
 *  + cuando creamos funciones las agregamos al principio.
 */
