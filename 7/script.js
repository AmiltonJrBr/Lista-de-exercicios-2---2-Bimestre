let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btComparar = document.querySelector("#btComparar");
let result = document.querySelector("#result");

function comparar(){
    if(numero1.value > numero2.value){
        result.textContent = "O primeiro e maior"
    }else if(numero1.value < numero2.value){
        result.textContent = "O segundo e maior"
    }else if(numero1.value == numero2.value){
        result.textContent = "Os numeros sao iguais"
    }
}

btComparar.onclick = function(){
    comparar();
}