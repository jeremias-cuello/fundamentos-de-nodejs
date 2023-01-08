import numberIsFloat from "number-is-float";
import { createInterface } from 'readline';
import isNumber from 'is-number';

const validate = (age) => {
	let validated = isNumber(age);

	if(validated){
		age = parseFloat(age);
		validated = !numberIsFloat(age) && age > 0;
	};

	return validated;
}

let interfaz = createInterface({
  input: process.stdin,
  output: process.stdout
});

interfaz.question('cuantos anios tenes? ', age => {
	let validated = validate(age);

	if(!validated){
		console.log('la edad ingresada no es valida');

		interfaz.close();
		return;
	}

  if(age >= 18) console.log('sos mayor de edad');
	else console.log('sos menor de edad');

  interfaz.close();
});
