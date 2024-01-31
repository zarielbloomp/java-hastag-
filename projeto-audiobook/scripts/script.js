const botaoPlayPause = document.getElementById('play-pause');
const botaoAvançar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos =   10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
} 

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOupausar(){
    if (taTocando === 0 ) {
        tocarFaixa();
        taTocando = 1;

    }else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = '../aula-1-intensivão-js/aula 1 (do zero)/books/dom-casmurro/' + capituloAtual + '.mp3';
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa()
}

function voltarFaixa(){
    if(capituloAtual = 1){
        capituloAtual = numeroCapitulos;
    }else{
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = '../aula-1-intensivão-js/aula 1 (do zero)/books/dom-casmurro/' + capituloAtual + '.mp3';
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa()
}

botaoPlayPause.addEventListener('click', tocarOupausar );
botaoAvançar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);