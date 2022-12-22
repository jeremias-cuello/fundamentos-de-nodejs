/**
 * las promesas son una clase global (asi como setInterval, etc.)
 * nuestras funciones en lugar de ejecutar las cosas cuando sean
 * devuelven una promesa, y quien las llame pueda tener la
 * promesa y pueda estar pendiente de su estado, si fallo, si
 * se realizo, etc.
 */
function hola(nombreHola){
	return new Promise(function (resolve, reject){
		setTimeout(() => {
			console.log(`Hola, ${nombreHola}`);
			resolve(nombreHola); // compartiendo parametro // adios(nombre)
		}, 1500);
	})
}

function hablar(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('Bla Bla Bla Bla...');
			// resolve(nombre);
			reject('Hay un error');
		}, 1000)
	})
}

function adios(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Adios ${nombre}`);
			resolve();
		}, 1000);
	});
}

console.log('iniciando el proceso...');

/* hola('Carlos')
	.then(nombre => {
		console.log('teminado el proceso');
	}) */

hola('Carlos')
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(adios)
	.then(() => {
		console.log('teminado el proceso');
	})
	.catch(error => { // cualquier error que ocurra en alguna funcion de arriba, desencadenara el catch
		console.error('Ha habido un error');
		console.error(error);
	})

	/**
	 * siempre que se usen promesas se usan catch
	 */
