console.log('Hola mundo!');
console.log('primera instruccion');

let i = 0;

setInterval(() => {
	console.log(i);
	i++;

	if (i === 5) {
		console.log('forzamos el error');
		let a = 3 + z
	}
}, 1000);

console.log('segunda instruccion');
