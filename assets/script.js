///Выпадающее меню

const openHamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".sidebar");
const cross = menu.querySelector(".sidebar__close-icon");


openHamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.style.display = "flex";
});

cross.addEventListener("click", e => {
  e.preventDefault();
  console.log(e.target);
  menu.style.display = "none";
});