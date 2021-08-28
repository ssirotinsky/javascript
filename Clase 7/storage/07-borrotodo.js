console.log('Iniciando...');
let cantidad = localStorage.length;
for (var i=0; cantidad; i++){
	var clave = localStorage.key(0);
	localStorage.removeItem(clave);
}
for (var i=0; i < localStorage.length; i++){
	var clave = localStorage.key(i);
	var valor = localStorage.getItem(clave)
	console.log('La clave', clave,'contiene', valor);
}
console.log('Finalizando...');