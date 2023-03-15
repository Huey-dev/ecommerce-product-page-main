const closeMenuBtn = document.querySelector('.close__menu')
const openMenuBtn = document.querySelector('.menu__btn')
const mobileMenu  = document.querySelector('.nav__link__content')
const overlay = document.querySelector(".overlay");


function toggleMenu() {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
}
function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}
openMenuBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', closeMenu);
mobileMenu.addEventListener('click', (e) => {
  e.currentTarget===e.target && toggleMenu()
})
