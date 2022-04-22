
// Animation icons
let listas = document.querySelectorAll(".ver-mais");
let icones = document.querySelectorAll(".icon-ver-mais");


listas.forEach((item) =>{
    item.addEventListener("mouseover", () =>{
        switch(item){
            case listas[0]:
                icones[0].style.opacity = "1";
                break;

            case listas[1]:
                icones[1].style.opacity = "1";
                break;

            case listas[2]:
                icones[2].style.opacity = "1";
                break;

            case listas[3]:
                icones[3].style.opacity = "1";
                break;

            case listas[4]:
                icones[4].style.opacity = "1";
                break;

            case listas[5]:
                icones[5].style.opacity = "1";
                break;

            case listas[6]:
                icones[6].style.opacity = "1";
                break;
        }
    })

    item.addEventListener("mouseout", () =>{
        switch(item){
            case listas[0]:
                icones[0].style.opacity = "0";
                break;

            case listas[1]:
                icones[1].style.opacity = "0";
                break;

            case listas[2]:
                icones[2].style.opacity = "0";
                break;

            case listas[3]:
                icones[3].style.opacity = "0";
                break;

            case listas[4]:
                icones[4].style.opacity = "0";
                break;

            case listas[5]:
                icones[5].style.opacity = "0";
                break;

            case listas[6]:
                icones[6].style.opacity = "0";
                break;

            case listas[7]:
                icones[7].style.opacity = "0";
                break;
        }
    })
})



// Dark/Normal mode
const btnMode = document.querySelector(".btn-mode");
let backgroundBody = document.querySelector('body');
let backgroundLeft = document.querySelector(".left");
let navbar = document.querySelector(".container-header");

btnMode.addEventListener("click", () =>{
    btnMode.classList.toggle("active");
    backgroundBody.classList.toggle("active");
    backgroundLeft.classList.toggle("active");
    navbar.classList.toggle("active");
})



// Scroll smooth
const menuList = document.querySelectorAll('#menu a[href^="#"]');

menuList.forEach(item =>{
    item.addEventListener("click", scrollId);
})

function scrollId(event){
    event.preventDefault();
    const to = scrollPosition(event.target) - 30;

    scrollSmooth(to)
}

function scrollPosition(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollSmooth(go){
    window.scroll({
        top: go,
        behavior:  "smooth"
    })
}







