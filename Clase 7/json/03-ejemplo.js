console.log('Iniciando...');

function almacenarIngresos(){
	let cantidad = 1;
	let ingreso = "";
	ingreso = prompt('Ingrese un valor:');
	while (ingreso != null) {
		localStorage.setItem(cantidad, ingreso);
		ingreso = prompt('Ingrese un valor:');
		cantidad++;
	}
}

function mostrarIngresos(){
	for (var i=0; i<localStorage.length; i++){
		let clave = localStorage.key(i);
		let valor = localStorage.getItem(clave);
		console.log('Clave:', clave , '- Valor:', valor);
	}
}

localStorage.clear();

almacenarIngresos();
mostrarIngresos();

let misEquipos = [
	{id: 1, nombre: 'River Plate', campeon: true},
	{id: 2, nombre: 'Boca Juniors', campeon: false},
	{id: 3, nombre: 'Independiente', campeon: false},
	{id: 4, nombre: 'Racing Club', campeon: false},
	{id: 5, nombre: 'San Lorenzo', campeon: false}
]

localStorage.setItem('equipos', JSON.stringify(misEquipos));
console.log(localStorage.getItem('equipos'));

console.log('Finalizando...');