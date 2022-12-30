const os = require('os');

console.group('Sistema Operativo')
	console.log(`arquitectura: ${os.arch()}`);
	console.log(`plataforma: ${os.platform()}`);
	console.group('cpus');
		console.log(`cantidad: ${os.cpus().length}`);
		console.log(os.cpus()); // arreglo de los cores
	console.groupEnd('cpus');
	console.log(os.constants); // contantes del sistema operativo

	// MEMORIA

	const SIZE = 1024;
	const kb = (bytes) => bytes / SIZE;
	const mb = (bytes) => kb(bytes) / SIZE;
	const gb = (bytes) => mb(bytes) / SIZE;

	console.log(os.freemem()); // memoria libre en bytes
	console.log(kb(os.freemem()));
	console.log(mb(os.freemem()));
	console.log(gb(os.freemem()));

	console.log(os.totalmem()); // cantidad de memoria total en gygas

	console.log(os.homedir());
	console.log(os.tmpdir());

	console.log(os.hostname()); // nombre de la maquina
	console.log(os.networkInterfaces()); // arreglo de todas las interfaces de red de la maquina
