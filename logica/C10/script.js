var segredo = 5;
var input = document.querySelector("input");

function verifica() {

    if(input.value == segredo) {
        alert("Você ACERTOUU")
    }  else {
        alert("Você ERROUU")
    }

}

var button = document.querySelector("button");

button.onclick = verifica;