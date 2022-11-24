const hamburger = document.querySelector('.top-menu-list');
const burgerMenu = document.querySelector('.nav-menu,.nav-menu-click');
const burgerImg = document.querySelector('.nav-menu-img');
const mainContainer = document.querySelector('.main-container');
const menuIcon = document.querySelector('.icon');
const menuList = document.querySelectorAll('.top-menu-list li');

function hamburgerAction() {
  if (hamburger.style.display === 'block') {
    hamburger.style.display = 'none';
    burgerMenu.classList.replace('nav-menu-click', 'nav-menu');
    burgerImg.src = 'img/icon-menu.png';
    mainContainer.style.position = 'relative';
  } else {
    hamburger.style.display = 'block';
    burgerMenu.classList.replace('nav-menu', 'nav-menu-click');
    burgerImg.src = 'img/close.png';
    mainContainer.style.position = 'fixed';
  }
}

function scrollAction() {
  if (hamburger.style.display === 'block') {
    mainContainer.style.position = 'relative';
    hamburger.style.display = 'none';
    burgerMenu.classList.replace('nav-menu-click', 'nav-menu');
    burgerImg.src = 'img/icon-menu.png';
  }
}

menuIcon.addEventListener('click', hamburgerAction);
menuList.addEventListener('click', scrollAction);

// -----------Popup Window Section

