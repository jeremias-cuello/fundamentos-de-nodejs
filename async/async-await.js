async function hola(nombreHola){
	return new Promise(function (resolve, reject){
		setTimeout(() => {
			console.log(`Hola, ${nombreHola}`);
			resolve(nombreHola); // compartiendo parametro // adios(nombre)
		}, 1500);
	})
}

async function hablar(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('Bla Bla Bla Bla...');
			resolve(nombre);
			// reject('Hay un error');
		}, 5)
	})
}

async function adios(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Adios ${nombre}`);
			resolve();
		}, 100);
	});
}

// await solo es valido dentro de una funcion asincrona
async function main(){
	let nombre = 'Jere Crack';

	await hola(nombre);

	for (let i = 1; i <= 5; i++)
		await hablar();

	await adios(nombre);
}

console.log('empezamos el proceso');
main();
console.log('terminamos el proceso');
