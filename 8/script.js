let numero = document.querySelector("#numero");
let btParOuImpar = document.querySelector("#btParOuImpar");
let result = document.querySelector("#result");

function parOuImpar(){
    if((numero.value % 2) == 0){
        result.textContent = "Par"
    }else{
        result.textContent = "Impar"
    }
}

btParOuImpar.onclick = function(){
    parOuImpar();
}