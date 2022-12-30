/*
 * process es un modulo global, por lo tanto no hace falta requerirlo
 */

process.on('exit', () => {
	// _todo lo que se ejecuta en este evento debe ser sincrono
	// porque estamos totalmente desconectados del eventLoop
	// y todo lo que hagamos asincrono no ve va a ejecutar
	// y todo se va a ejecutar en el hilo principal

	console.log('el proceso termino');

	setTimeout(() => {
		console.log('esto nunca se va a ejecutar');
	}, 0)
});

process.on('beforeExit', () => {
	console.log('el proceso va a terminar');
});

process.on('uncaughtException', (err, origen) => { // exepciones no capturadas
	console.error('se nos paso capturar el error');
	console.error(err);
	console.error('origen: ' + origen);
});

console.log('yo me ejecuto');
funcionqueNoExiste();
console.log('yo no me ejecuto');

process.on('uncaughtRejection', () => { // promesas rechazadas

});
