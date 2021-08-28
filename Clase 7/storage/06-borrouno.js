console.log('Iniciando...');
localStorage.removeItem('edad');
for (var i=0; i < localStorage.length; i++){
	var clave = localStorage.key(i);
	var valor = localStorage.getItem(clave)
	console.log('La clave', clave,'contiene', valor);
}
console.log('Finalizando...');