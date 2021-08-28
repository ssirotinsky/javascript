console.log('Iniciando...');

let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
						<div>
							<ul>
								<li> ${producto.nombre} </li>
								<li> ${producto.nombre} </li>
								<li> ${producto.nombre} </li>
								<li> ${producto.nombre} </li>
								<li> ${producto.nombre} </li>
							</ul>
						</div>
                        <b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);

console.log('Finalizando...');