/**
 * hay modulos del core de nodejs que ya estan dentro del core y hay otros que debemos inportarlos
 *
 * setTimeOut, console.error estos pertenecen a modulos internos del core, ya usabamos modulos pero no
 * lo sabiamos, no los importabamos porque estaban internamente dentro del core
 *
 * dependencia Circular, que depende de si mismo. averiguar
 */

// console.log(global);

// let i = 0;

// let intervalo = globalThis.setInterval(() => {
// 	console.log(i); i++;
// 	if (i >= 100) {
// 		clearInterval(intervalo);
// 	}
// }, 1000);

// let intervalo2 = global.setInterval(() => {
// 	console.log(i); i++;
// 	if (i >= 100) {
// 		clearInterval(intervalo2);
// 	}
// }, 500);

// console.log(global.process);
// console.log(process);
console.log(__dirname); // imprime en qué directorio estamos
console.log(__filename); // imprime no solo en que directorio sino tambien en que archivo

/**
 * si podes no usar variables globales, hacelo. es un gran foco de problemas usar variables globales.
 * podes cerar modulos, archivos de configuracion, despues se ve como se importa.
 */

// para crear variables globales:
global.miVariable = "elValorQueyoQuiera";

console.log(global.miVariable);
console.log(miVariable); // como es variable global no hace falta "global."

let c = new Promise((a, b) => {
	a();
	b();
});
console.log(c);
console.log(global.Promise);
