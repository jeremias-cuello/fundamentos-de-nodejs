function saludar() {
	console.log('Hola mundo!');
}

export default {
	saludar,
	prop1: 'Hola soy una propiedad 1 de un modulo experimental',
	prop2: 'Hola soy una propiedad 2 de un modulo experimental'
};

const prop3 = "propiedad 3";

export {
	prop3 as propiedad3 // asercion
};

const object = {
	nombre: 'jeremias',
	edad: 18
}

export { object as noImporta };
export {
	// noImporta as obj
	object as obj
}

console.log('ejecutando codigo del modulo');
