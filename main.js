let tela = document.querySelector('.screen');
let numeros = document.querySelectorAll('.numeros');
let sinais = document.querySelectorAll('.sinais');
let igual = document.querySelector('.igual');
let reset = document.querySelector('.reset');
let del = document.querySelector('.del');

for (let i = 0; i < numeros.length; i++) {
    
    let valor = numeros[i];
    
    
    valor.onclick = function () {
        tela.innerHTML = numeros[i].value;
    }
}
