
const menu = document.querySelector('.checkbtn');
menu.addEventListener("click", mobileMenu)

function mobileMenu(){
    const menuItem = document.querySelector('#menu')
    menuItem.classList.toggle('open')
}


let contador = 1;
setInterval (function() {
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if (contador > 3) {
        contador = 1;
    }
}, 3000)