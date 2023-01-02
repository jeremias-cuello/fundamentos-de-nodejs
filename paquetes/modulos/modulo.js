function saludar() {
	console.log('hola mundo!');
}

// exportanco la funcion saludar para que sea accesible desde afuera
module.exports = {
	saludar,
	property_1: 'Hola soy una propiedad 1 del modulo nativo.',
	property_2: 'Hola soy una propiedad 2 del modulo nativo.'
}
