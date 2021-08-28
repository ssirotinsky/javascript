console.log('Iniciando...');

let miProducto = {id: 2, producto: 'Arroz'}




localStorage.setItem('producto', JSON.stringify(miProducto));
let leoProductoTexto = localStorage.getItem('producto');
console.log(leoProductoTexto);
console.log(typeof leoProductoTexto);
let leoProductoObj = JSON.parse(localStorage.getItem('producto'));
console.log(leoProductoObj);
console.log(typeof leoProductoObj);

console.log('Finalizando...');