console.log('Iniciando...');

let miProducto = {id: 2, producto: 'Arroz'}
localStorage.setItem('producto', miProducto);
let leoProducto = localStorage.getItem('producto');
console.log(leoProducto);
console.log(typeof leoProducto);

console.log('Finalizando...');
