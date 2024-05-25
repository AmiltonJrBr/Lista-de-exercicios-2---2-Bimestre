let quant = document.querySelector("#quant");
let btCalcOmelete = document.querySelector("#btCalcOmelete");
let ovos = document.querySelector("#ovos");
let queijo = document.querySelector("#queijo");

function calcularOmelete(){
    ovos.textContent = (Number(quant.value) * 2) + " ovos";
    queijo.textContent = (Number(quant.value) * 50) + " gramas de queijo";
}

btCalcOmelete.onclick = function(){
    calcularOmelete();
}