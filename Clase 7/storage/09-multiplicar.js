console.log('Iniciando...');

const multiplicar = (n1,n2) => n1 * n2;
const guardarLocal = (clave, valor) => localStorage.setItem(clave, valor);

let numero = parseInt(prompt('Ingrese un número: '));
for (let i=0; i<=10; i++){
	guardarLocal(i, multiplicar(numero, i));
}

console.log('Finalizando...');