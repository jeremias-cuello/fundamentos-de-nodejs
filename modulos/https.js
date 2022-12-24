const http = require('http');
const puerto = 3000;

http.createServer(function (req, res) {
	console.log('nueva peticion');
	console.log(req.url);

	res.writeHead(201, { 'Content-Type': 'text/html' }); // header() de php
	res.writeHead(201, { 'Host': 'lo-que-sea/' });

	// envindo mensaje a usuario
	res.write('' +
		'<script>' +
			'alert("Hola")' +
		'</script>' +
		'Hola ya se usar http en NodeJS' +
	'');

	res.end();
}).listen(puerto);

console.log('escuchando http en el puerto ' + puerto);
