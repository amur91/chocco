///Выпадающее меню

const openHamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".sidebar");
const cross = document.querySelector(".sidebar__close-icon");

openHamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.style.display = "flex";
});

cross.addEventListener("click", e => {
  e.preventDefault();
  menu.style.display = "none";
});