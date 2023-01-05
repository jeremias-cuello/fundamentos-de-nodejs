console.time('todo');

let suma = 0;

console.time('bucle')

for (let i = 0; i < 10000000; i++) {
	suma += 1;
}

console.timeEnd('bucle')

let suma2 = 0;

console.time('bucle2')

for (let j = 0; j < 10000000; j++) {
	suma2 += 1;
}

console.timeEnd('bucle2')

console.timeEnd('todo');

console.log('Empieza el proceso asincrono');
console.time('asincrono')
asincrona()
	.then(() => {
		console.timeEnd('asincrono')
	})

function asincrona(params) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.time('termina el proceso asincrono');
			resolve();
		});
	});
}

