let horaText = document.querySelector("#hora");
let minText = document.querySelector("#min");
let segText = document.querySelector("#seg");
let btn24Horas = document.querySelector("#horas-24");

window.addEventListener("load", teste)

function teste(){
        setInterval(() =>{
            let data = new Date();
            let hora = data.getHours();
            let min = data.getMinutes();
            let seg = data.getSeconds();
    
            if(hora < 10){
                horaText.innerHTML = `0${hora} :`;
            }else{
                horaText.innerHTML = `${hora} :`;
            }
            
            if(min < 10){
                minText.innerHTML = `0${min} :`;
            }else {
                minText.innerHTML = `${min} :`;
            }
            
            if(seg < 10){
                segText.innerHTML = `0${seg}`
            }else{
                segText.innerHTML = `${seg}`
            }
            
        },1000) 
}





