var relogio24Horas = document.querySelector(".relogio");
var relogio12Horas = document.querySelector(".relogio2");


window.addEventListener("load", teste)
function teste(){
    relogio24Horas.style.display = "flex";
    relogio12Horas.style.display = "none";
    btn12Horas.style.color = "#FFF";
    btn24Horas.style.color = "#00CED1";

    let horaText = document.querySelector("#hora1");
    let minText = document.querySelector("#min1");
    let segText = document.querySelector("#seg1");


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

const btn24Horas = document.querySelector("#btn-24Horas");
btn24Horas.addEventListener("click", teste)



const btn12Horas = document.querySelector("#btn-12Horas");
btn12Horas.addEventListener("click", () =>{
    relogio24Horas.style.display = "none";
    relogio12Horas.style.display = "flex";
    btn12Horas.style.color = "#00CED1";
    btn24Horas.style.color = "#FFF";

    let horaText = document.querySelector("#hora2");
    let minText = document.querySelector("#min2");
    let segText = document.querySelector("#seg2");
    let amPM = document.querySelector("#amPM");


        setInterval(() =>{
            let data = new Date();
            let hora = data.getHours();
            let min = data.getMinutes();
            let seg = data.getSeconds();
    
            switch(hora){
                case 10:
                    horaText.innerHTML = `${hora}:`;
                    amPM.innerHTML = `AM`;
                    break;

                case 11:
                    horaText.innerHTML = `${hora}:`;
                    amPM.innerHTML = `AM`;
                    break;

                case 12:
                    horaText.innerHTML = `${hora}:`;
                    amPM.innerHTML = `PM`;
                    break;

                case 13:
                    hora = 1;
                    horaText.innerHTML = `${hora}:`;
                    amPM.innerHTML = `PM`;
                    break;

                case 14:
                    hora = 2;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 15:
                    hora = 3;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 16:
                    hora = 4;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 17:
                    hora = 5;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 18:
                    hora = 6;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 19:
                    hora = 7;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 20:
                    hora = 8;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 21:
                    hora = 9;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 22:
                    hora = 10;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 23:
                    hora = 11;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `PM`;
                    break;

                case 00:
                    hora = 12;
                    horaText.innerHTML = `${hora}:`
                    amPM.innerHTML = `AM`
                    break;
                
                default:
                    horaText.innerHTML = `0${hora}:`
                    amPM.innerHTML = `AM`
                    break;
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


})





