let nota = document.querySelector("#nota");
let btNota = document.querySelector("#btNota");
let result = document.querySelector("#result");

function calcularNota(){
    if((nota.value < 6) && (nota.value > 4)){
        result.textContent = "precisa fazer prova substitutiva"
    }else if(nota.value > 6){
        result.textContent = "aprovado"
    }else if(nota.value < 4){
        result.textContent = "reprovado"
    }
}

btNota.onclick = function(){
    calcularNota();
}