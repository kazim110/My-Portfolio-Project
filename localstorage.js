let nameInput = document.getElementById('name-input');
let emainInput = document.getElementById('emain-input');
let textAreaInput = document.getElementById('text-area');

if(!localStorage.getItem('nameInput')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('nameInput', document.getElementById('name-input').value);
  localStorage.setItem('emailInput', document.getElementById('email-input').value);
  localStorage.setItem('textAreaInput', document.getElementById('text-area').value);

  setStyles();
}

function setStyles() {
  var currentName = localStorage.getItem('nameInput');
  var currentEmail = localStorage.getItem('emailInput');
  var currentText = localStorage.getItem('textAreaInput');

  document.getElementById('nameInput').value = currentColor;
  document.getElementById('emailInput').value = currentFont;
  document.getElementById('textAreaInput').value = currentImage;

  nameInput.innerHTML =  currentName;
  emainInput.innerHTML =  currentEmail;
  textAreaInput.innerHTML =  currentText;
  
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
