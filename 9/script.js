let quantAlunos = document.querySelector("#quantAlunos");
let quantTurmas = document.querySelector("#quantTurmas");
let btDividir = document.querySelector("#btDividir");
let result = document.querySelector("#result");

function dividirTurmas(){
    result.textContent = "As turmas vao conter " + (quantAlunos.value / quantTurmas.value) + " alunos, " + (quantAlunos.value % quantTurmas.value) + " ira ficar sem turma"
}

btDividir.onclick = function(){
    dividirTurmas();
}