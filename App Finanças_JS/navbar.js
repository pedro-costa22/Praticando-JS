const currentLocation = location.href;
const menuItem = document.querySelectorAll('a')
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = 'active'
    }
}

function hadleMenu(){
    const menuItem = document.querySelector('#menu')
    menuItem.classList.toggle('open')
}

const menu = document.querySelector('.checkbtn')
menu.addEventListener("click", hadleMenu)