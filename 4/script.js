let sab1 = document.querySelector("#sab1");
let sab2 = document.querySelector("#sab2");
let sab3 = document.querySelector("#sab3");
let sab4 = document.querySelector("#sab4");
let quantRefri = document.querySelector("#quantRefri");
let btCalcPedido = document.querySelector("#btCalcPedido");
let sabores = document.querySelector("#sabores");
let valor = document.querySelector("#valor");

function calcularPedido(){
    sabores.textContent = "Os sabores sao: " + sab1.value + ", " +  sab2.value + ", " + sab3.value + " e " +  sab4.value + ".";
    valor.textContent = 57 + (Number(quantRefri.value) * 7);
}

btCalcPedido.onclick = function(){
    calcularPedido();
}