const { exec, spawn } = require('child_process');

// exec ejecuta comandos
// exec('node modulos/consola.js', (err, stdout, stderr) => { //  dir en windows y ls en linux o Mac
// 	if (err) {
// 		console.error(err);
// 		return false;
// 	}

// 	console.log(stdout);
// 	console.log(stderr); // aca imprime los errores y los warning
// });

let proceso = spawn('tree', ['/a', '/f']);

// console.log(proceso); // podemos ver las cosas que hay en el proceso
console.log('¿cual es su PID?');
console.log(proceso.pid);
console.log('¿esta conectado?');
console.log(proceso.connected);

proceso.stdout.on('data', dato => {
	console.log(dato.toString());
})

proceso.on('exit', () => {
	console.log('el proceso termino');
	console.log('¿esta muerto?');
	console.log(proceso.killed);
})

/* para mas informacion sobre los eventos de los procesos hijos, siempre esta la documentacion de node */
