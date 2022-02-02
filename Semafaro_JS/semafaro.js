const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const desl = document.getElementById('desl');
const sem = document.getElementById('sem');

function vermelho ()  {
    sem.src = './img/vermelho.png';
}

function amarelo () {
    sem.src = "./img/amarelo.png";
}

function verde () {
    sem.src = './img/verde.png';
}

function desligar () {
    sem.src = './img/desligado.png';
}





red.addEventListener('click', vermelho); //onclick = "vermelho()"
yellow.addEventListener('click', amarelo); //onclick = "yellow()"
green.addEventListener('click', verde); //onclick = "green()"
desl.addEventListener('click', desligar);