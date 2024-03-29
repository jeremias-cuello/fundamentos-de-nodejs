const fs = require('fs');

/**
 * _todo lo que hagamos con FileSystem sera asincrono porque en el caso de que lo hagamos sincrono
 * estara tapando al servidor, hace que el servidor no responda peticiones
 */

function leer(ruta, cb){
	fs.readFile(ruta, (error, data) => {
		cb(data.toString());
	});
}

function escribir(ruta, content, cb) {
	fs.writeFile(ruta, content, function (error) {
		if (error) {
			cb('Ocurrio un error, no se ha podido escribir el archivo.');
		} else {
			cb('Se logro escribir el archivo');
		}
	});
}

function borrar(ruta, cb) {
	fs.unlink(ruta, cb);
}

// leer(__dirname + "/archivo.txt", console.log);

// si se quiere sobrescribir un archivo ponemos una ruta de un archivo existente
// si se quiere crear un archivo ponemos una ruta de un archivo inexistente asi lo crea
escribir(__dirname + "/otroArchivo.txt", "otro Archivo \n linea 2 \n linea 3", console.log);
borrar(__dirname + "/otroArchivo.txt", console.log);
