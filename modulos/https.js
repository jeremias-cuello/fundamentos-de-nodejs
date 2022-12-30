const http = require('http');
const puerto = 3000;

http.createServer(function (req, res) {
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
			'alert("Hola")' +
		'</script>' +
		'Hola ya se usar http en NodeJS' +
	'');

	res.end();

}).listen(puerto);

console.log('escuchando http en el puerto ' + puerto);
