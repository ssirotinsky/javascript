console.log('Iniciando...');

let parrafo = document.getElementById("parrafo");
parrafo.parentNode.removeChild(parrafo);

let paises = document.getElementsByClassName("paises");
paises[0].parentNode.removeChild(paises[0])

console.log('Finalizando...');