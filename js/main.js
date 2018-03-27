var navMenu = document.querySelector('.nav');

function showMenu() {
  navMenu.classList.remove('nav-hidden');
}
function hiddenMenu() {
  navMenu.classList.add('nav-hidden');
}
var buttonNav = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');
buttonNav.addEventListener('click',showMenu);
buttonClose.addEventListener('click',hiddenMenu);
