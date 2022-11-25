const hamburger = document.querySelector('.top-menu-list');
const burgerMenu = document.querySelector('.nav-menu,.nav-menu-click');
const burgerImg = document.querySelector('.nav-menu-img');
const mainContainer = document.querySelector('.main-container');
const menuIcon = document.querySelector('.icon');
// const menuList = document.querySelectorAll('.top-menu-list li');

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

// function scrollAction() {
//   if (hamburger.style.display === 'block') {
//     mainContainer.style.position = 'relative';
//     hamburger.style.display = 'none';
//     burgerMenu.classList.replace('nav-menu-click', 'nav-menu');
//     burgerImg.src = 'img/icon-menu.png';
//   }
// }

menuIcon.addEventListener('click', hamburgerAction);
// menuList.addEventListener('click', scrollAction);

// -----------Popup Window Section

const workDetails = [
  {
    workId: '1',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '2',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio1.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '3',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio2.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '4',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio3.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
];

const cards = document.querySelector('.cards');

cards.innerHTML = '';

for (let j = 0; j < workDetails.length; j += 1) {
  let techLang = '';
  workDetails[j].workLanguages.forEach((workLanguages) => {
    techLang = `${techLang}<li>${workLanguages}</li>`;
  });

  cards.innerHTML += `<div class="card">
<img class="work-img" src="./img/${workDetails[j].workImg}" alt="Avatar">
<div class="work-description">
    <div class="work-title">
        <h4 class="work-title-main">${workDetails[j].workTitle}</h4>
        <ul class="work-info">
            <li class="client">
                <p>
                    Canopy
                </p>
            </li>
            <li class="role">
                <p>
                    Back End Dev
                </p>
            </li>
            <li class="year">
                <p>
                    2015
                </p>
            </li>
        </ul>
    </div>
    <div class="work-content-text">
        <p>
          ${workDetails[j].workDesc} 
        </p>
    </div>
    <ul class="work-tech-used">
      ${techLang}
    </ul>
    <div class="action-div">
        <button class="secondary-btn  work-modal-${j}"><p>See Project</p></button>
    </div>
</div>
</div>`;
}

const modal = document.getElementById('myModal');
const modalTitle = document.querySelector('.mod-title');
const modalImg = document.querySelector('.mod-img');
const modalDesc = document.querySelector('.mod-desc');
const modalLang = document.querySelector('.mod-lang');
const modalLive = document.querySelector('.mod-live');
const modalSource = document.querySelector('.mod-source');
const span = document.getElementsByClassName('close')[0];

for (let i = 0; i < workDetails.length; i += 1) {
  document.querySelector(`.work-modal-${i}`).addEventListener('click', () => {
    let techLang = '';
    workDetails[i].workLanguages.forEach((workLanguages) => {
      techLang = `${techLang}<li>${workLanguages}</li>`;
    });
    modal.style.display = 'flex';
    modalImg.src = `./img/${workDetails[i].workImg}`;
    modalTitle.innerHTML = workDetails[i].workTitle;
    modalDesc.innerHTML = workDetails[i].workDesc;
    modalLang.innerHTML = techLang;
    modalLive.setAttribute('href', workDetails[i].liveLink);
    modalSource.setAttribute('href', workDetails[i].projLink);
  });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};