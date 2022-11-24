var hamburger=document.querySelector('.top-menu-list')
var burgerMenu=document.querySelector('.nav-menu,.nav-menu-click')
var burgerImg=document.querySelector('.nav-menu-img')
var mainContainer=document.querySelector('.main-container')
var works=document.querySelector('.works-section')
var aboutme=document.querySelector('.aboutme-section')
var contactme=document.querySelector('.contactme-section')
var headline=document.querySelector('.headline')
hamburger.style.display='flex'

function hamburgerAction() {
    if(hamburger.style.display==="block"){
        hamburger.style.display="none";
        burgerMenu.classList.replace('nav-menu-click','nav-menu')
        burgerImg.src="img/icon-menu.png"
        mainContainer.style.position='relative'
    }else {
        hamburger.style.display="block"
        burgerMenu.classList.replace('nav-menu','nav-menu-click')
        burgerImg.src="img/close.png"
        mainContainer.style.position='fixed'
    }
}

function scrollAction(){
    if(hamburger.style.display==='block'){
        mainContainer.style.position='relative'
        hamburger.style.display="none";
        burgerMenu.classList.replace('nav-menu-click','nav-menu')
        burgerImg.src="img/icon-menu.png"
    }
}