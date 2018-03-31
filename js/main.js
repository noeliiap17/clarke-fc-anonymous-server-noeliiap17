var navMenu = document.querySelector('.nav');
var btnMenu = document.querySelector('.nav-trigger');

function showMenu() {
  navMenu.classList.remove('nav-hidden');
  btnMenu.classList.add('btn-hidden');
}
function hiddenMenu() {
  navMenu.classList.add('nav-hidden');
  btnMenu.classList.remove('btn-hidden');

}
var buttonNav = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');
buttonNav.addEventListener('click',showMenu);
buttonClose.addEventListener('click',hiddenMenu);
