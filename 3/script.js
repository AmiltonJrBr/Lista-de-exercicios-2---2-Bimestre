let pNum = document.querySelector("#pNum");
let sNum = document.querySelector("#sNum");
let btCalcOperacoes = document.querySelector("#btCalcOperacoes");
let soma = document.querySelector("#soma");
let subtracao = document.querySelector("#subtracao");
let multiplicacao = document.querySelector("#multiplicacao");
let divisao = document.querySelector("#divisao");

function calcularOperacoes(){
    soma.textContent = Number(pNum.value) + Number(sNum.value);
    subtracao.textContent = Number(pNum.value) - Number(sNum.value);
    multiplicacao.textContent = Number(pNum.value) * Number(sNum.value);
    divisao.textContent = Number(pNum.value) / Number(sNum.value);
}

btCalcOperacoes.onclick = function(){
    calcularOperacoes();
}