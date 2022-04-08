let tela = document.querySelector('.screen');
let numerosESinais = document.querySelectorAll('.numerosESinais');
let igual = document.querySelector('.igual');
let reset = document.querySelector('.reset');
let del = document.querySelector('.del');

for (let i = 0; i < numerosESinais.length; i++) {
    
    let valor = numerosESinais[i];
    
    
    valor.onclick = function () {
        var inserir = tela.innerHTML;
        tela.innerHTML = inserir + numerosESinais[i].value;
    }

    del.onclick = function () {
        let apagar = tela.innerHTML;
        tela.innerHTML = apagar.substring(0, apagar.length -1);
    }

    reset.onclick = function () {
        let limpar = tela.innerHTML;
        tela.innerHTML = limpar.substring(limpar.length);
    }

    igual.onclick = function () {
        let resultado = tela.innerHTML;
        if(resultado){
            tela.innerHTML = eval(resultado);
        }
    }
}

