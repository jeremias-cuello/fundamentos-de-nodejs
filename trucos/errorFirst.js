function asincrona(callback) {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (error) {
			callback(error);
		}
	}, 1000);
}

// try { // try-catch va a capturar los errores asincrona pero no de su callback
asincrona((error, data) => {
	if(error){
		console.error('tenemos un error');
		console.error(error);
		return false;
		// throw error; // throw dentro de un callback asincrono no funciona
		// throw funciona en bloques de codigos sincrono
	}

	console.log('todo salio bien, mi data es ' + data);
});
// } catch (err) {
// 	console.log('hemos capturado el error');
// 	console.log(err);
// }
