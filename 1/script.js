let cotacao = document.querySelector("#cotacao");
let btSubir1 = document.querySelector("#btSubir1");
let btSubir2 = document.querySelector("#btSubir2");
let btSubir5 = document.querySelector("#btSubir5");
let btSubir10 = document.querySelector("#btSubir10");
let result = document.querySelector("#result");

function calcularSubir1(){
    result.textContent = Number(cotacao.value) + (Number(cotacao.value) * Number(1/100));
}

function calcularSubir2(){
    result.textContent = Number(cotacao.value) + (Number(cotacao.value) * Number(2/100));
}

function calcularSubir5(){
    result.textContent = Number(cotacao.value) + (Number(cotacao.value) * Number(5/100));
}

function calcularSubir10(){
    result.textContent = Number(cotacao.value) + (Number(cotacao.value) * Number(10/100));
}

btSubir1.onclick = function(){
    calcularSubir1();
}

btSubir2.onclick = function(){
    calcularSubir2();
}

btSubir5.onclick = function(){
    calcularSubir5();
}

btSubir10.onclick = function(){
    calcularSubir10();
}