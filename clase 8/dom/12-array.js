console.log('Iniciando...');

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];
let contenedor = document.createElement("ul");
document.body.appendChild(contenedor);

let misUL = document.getElementsByTagName("ul");
let miUL = misUL[0];
for (const producto of productos) {
	
	miLI = document.createElement("li")
    miLI.innerHTML = `<h3> ID: ${producto.id}</h3>
                      <p>  Producto: ${producto.nombre}</p>
                      <b> $ ${producto.precio}</b>`;
	miUL.appendChild(miLI);

}

console.log('Finalizando...');