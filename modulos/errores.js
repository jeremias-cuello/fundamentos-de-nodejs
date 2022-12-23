function otraFuncion() {
	return seRompe();
}
function seRompe() {
	return 3 + z;
}

try {
	otraFuncion();
} catch (error) {
	console.error('Ocurrio un error');
	console.error(error); // _todo el error
	// console.error(error.message); // solo el mensaje
}

console.log('esto se ejecuta');

/**
 * no siempre que ocurra un error se deja un mensaje y sigue corriendo el programa
 * muchas veces, lo que podemos hacer es reintentar ese proceso que fallo una cantidad de veces y si no se
 * logro dejamos un mensaje y seguimos, o a lo mejor si hay un error de que no se pudo subir un archivo
 * se deja un mensaje de que el usuario reintente subirlo...
 */

/**
 * el catch se desencadenara aun asi el error ocurre en una funcion que fue llamada de otra y esa de otra, y asi
 * en tola pila de ejecucion, si en algun momento ocurre un error se ejecutara el catch
 */