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

let temas = document.querySelectorAll('.temas');
console.log(temas);

temas[1].onclick = function () {
    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 90%)';
    document.getElementById('temas1').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('temas2').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('temas3').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('temas1').style.color = 'hsl(60, 10%, 19%)';
    document.getElementById('temas2').style.color = 'hsl(60, 10%, 19%)';
    document.getElementById('temas3').style.color = 'hsl(60, 10%, 19%)';
    document.querySelector('p').style.color = 'hsl(60, 10%, 19%)';
    document.querySelector('h1').style.color = 'hsl(60, 10%, 19%)';
    document.getElementById('divScreen').style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.getElementById('screen').style.color = 'hsl(60, 10%, 19%)';
    document.getElementById('botoes').style.backgroundColor = 'hsl(0, 5%, 81%)';
    document.getElementById('numerosESinais').style.backgroundColor = 'hsl(30, 25%, 89%)';
    document.getElementById('del').style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.getElementById('del').style.boxShadow = '0 4px hsl(185, 58%, 25%)';
    document.getElementById('reset').style.backgroundColor = 'hsl(185, 42%, 37%)';
    document.getElementById('reset').style.boxShadow = '0 4px hsl(185, 58%, 25%)';
    document.getElementById('igual').style.backgroundColor = 'hsl(25, 98%, 40%)';
    document.getElementById('igual').style.boxShadow = '0 4px hsl(25, 99%, 27%)';
}