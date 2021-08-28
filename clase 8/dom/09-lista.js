console.log('Iniciando...');

let nodoUL = document.getElementById("personas");

let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];

for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona;
    nodoUL.appendChild(li);
}


console.log('Finalizando...');

