const http = require('http');
const puerto = 3000;

http.createServer(router).listen(puerto);

function router(req, res) {
	res.writeHead(201, { 'Content-Type': 'text/html' }); // header() de php
	res.writeHead(201, { 'Host': 'lo-que-sea/' });

	console.group('nueva peticion')
		console.log('url: ' + req.url);
	console.groupEnd('nueva peticion');

	console.log(`sistema operativo del cliente: ${req.headers['sec-ch-ua-platform']}`);
	console.log('metodo de solicitud: ' + req.method);

	// enviando mensaje a usuario
	res.write('' +
		'<script>' +
			'alert("Primera peticion")' +
		'</script>' +
		'');

	switch (req.url) {
		case '/hola':
			let saludo = saludar();
			res.write(saludo);
			res.end(); // aca le deja al usuaio cargar la oagina porque antes todavia no responde
			break;

		default:
			res.write('Error 404.');
			res.end();
			break;
	}

}

function saludar() {
	return 'hola Que tal';
}

console.log('escuchando http en el puerto ' + puerto);
