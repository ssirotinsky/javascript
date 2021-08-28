console.log('Iniciando...');

let nombre = "Sergio";
let apellido = "Sirotinsky";
let edad = 44;
let lenguaje = "Javascript";

let texto = 'Soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años. Me gusta programar en ' + lenguaje;
let template = `Soy ${nombre} ${apellido} y tengo ${edad} años. Me gusta programar en ${lenguaje}`;

console.log(texto);
console.log(template);

console.log('Finalizando...');