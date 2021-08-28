console.log('Iniciando...');

let contenedores = document.getElementsByTagName('div');
for (let i=0; i < contenedores.length; i++){
	console.log(contenedores[i].innerHTML);
}

console.log('Finalizando...');