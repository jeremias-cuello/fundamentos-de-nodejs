const fs = require('fs');

/**
 * _todo lo que hagamos con FileSystem sera asincrono porque en el caso de que lo hagamos sincrono
 * estara tapando al servidor, hace que el servidor no responda peticiones
 */

function leer(ruta, cb){
	fs.readFile(ruta, (error, data) => {
		console.log(data.toString());
		cb();
	});
}

console.log('iniciamos proceso');
leer(__dirname + "/archivo.txt", () => {
	console.log("terminamos proceso");
});
