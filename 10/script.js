let vVendido = document.querySelector("#vVendido");
let metaMensal = document.querySelector("#metaMensal");
let metaMinima = document.querySelector("#metaMinima");
let btCalcularMetas = document.querySelector("#btCalcularMetas");
let metaAtingida = document.querySelector("#metaAtingida");
let percentualMeta = document.querySelector("#percentualMeta");
let percentualMetaMinima = document.querySelector("#percentualMetaMinima");

function calcularMetas(){
    if(Number(vVendido.value) >= metaMensal.value){
        metaAtingida.textContent = "Meta atingida";
    }else if(Number(vVendido.value) >= metaMinima.value){
        metaAtingida.textContent = "Meta minima atingida";
    }else{
        metaAtingida.textContent = "Nenhuma meta atingida";
    }
    
    percentualMeta.textContent = "Percentual atingido da meta: " + ((vVendido.value / metaMensal.value)*100) + "%";

    percentualMetaMinima.textContent = "Percentual atingido da meta minima: " + ((vVendido.value / metaMinima.value)*100) + "%";
}

btCalcularMetas.onclick = function(){
    calcularMetas();
}