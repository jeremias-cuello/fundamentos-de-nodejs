const { exec } = require('child_process');

// exec ejecuta comandos
exec('node modulos/consola.js', (err, stdout, stderr) => { //  dir en windows y ls en linux o Mac
	if (err) {
		console.error(err);
		return false;
	}

	console.log(stdout);
	console.log(stderr); // aca imprime los errores y los warning
});
