let progressBar = document.querySelector(".circle");
let progressText = document.querySelector(".text");

let progressBarTwo = document.querySelector(".circle2");
let progressTextTwo = document.querySelector(".text2");



let color = "#d3d3d3"
let inicio = 0;
let final = 65;
let vel = 30;

let progressao = setInterval(() =>{
    inicio++;
    progressText.innerHTML = `${inicio}%` ;
    progressBar.style.background = `conic-gradient(
        #AB08BB ${inicio * 3.6}deg, 
        ${color} ${inicio * 3.6}deg 
    )`
   
    if(inicio == final){
        clearInterval(progressao)
    }
}, vel)








