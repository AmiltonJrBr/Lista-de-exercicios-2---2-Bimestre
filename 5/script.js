let nome1 = document.querySelector("#nome1");
let ano1 = document.querySelector("#ano1");
let nome2 = document.querySelector("#nome2");
let ano2 = document.querySelector("#ano2");
let nome3 = document.querySelector("#nome3");
let ano3 = document.querySelector("#ano3");
let btCalcMaisVelha = document.querySelector("#btCalcMaisVelha");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");

function calcularPessoaMaisVelha(){
    if((ano1.value < ano2.value) && (ano1.value < ano3.value)){
        result1.textContent = "Pessoa mais velha: " + nome1.value + " - " + (2024 - ano1.value) + " anos";
        if(ano2.value < ano3.value){
            result2.textContent = "Segunda pessoa mais velha: " + nome2.value + " - " + (2024 - ano2.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome3.value + " - " + (2024 - ano3.value) + " anos";            
        }else{
            result2.textContent = "Segunda pessoa mais velha: " + nome3.value + " - " + (2024 - ano3.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome2.value + " - " + (2024 - ano2.value) + " anos"; 
        }
    }else if((ano2.value < ano1.value) && (ano2.value < ano3.value)){
        result1.textContent = "Pessoa mais velha: " + nome2.value + " - " + (2024 - ano2.value) + " anos";
        if(ano1.value < ano3.value){
            result2.textContent = "Segunda pessoa mais velha: " + nome1.value + " - " + (2024 - ano1.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome3.value + " - " + (2024 - ano3.value) + " anos";            
        }else{
            result2.textContent = "Segunda pessoa mais velha: " + nome3.value + " - " + (2024 - ano3.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome1.value + " - " + (2024 - ano1.value) + " anos"; 
        }
    }else if((ano3.value < ano2.value) && (ano3.value < ano1.value)){
        result1.textContent = "Pessoa mais velha: " + nome3.value + " - " + (2024 - ano3.value) + " anos";
        if(ano2.value < ano1.value){
            result2.textContent = "Segunda pessoa mais velha: " + nome2.value + " - " + (2024 - ano2.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome1.value + " - " + (2024 - ano1.value) + " anos";            
        }else{
            result2.textContent = "Segunda pessoa mais velha: " + nome1.value + " - " + (2024 - ano1.value) + " anos";
            result3.textContent = "Terceira pessoa mais velha: " + nome2.value + " - " + (2024 - ano2.value) + " anos"; 
        }
    }
}

btCalcMaisVelha.onclick = function(){
    calcularPessoaMaisVelha();
}