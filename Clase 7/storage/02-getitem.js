console.log('Iniciando...');

let usuario = localStorage.getItem('usuario');
console.log('Usuario:', usuario);
console.log('Es profe?', localStorage.getItem('profe'));
console.log('La edad es', localStorage.getItem('edad'));
console.log(typeof localStorage.getItem('usuario'));
console.log(typeof localStorage.getItem('profe'));
console.log(typeof localStorage.getItem('edad'));

console.log('Finalizando...');