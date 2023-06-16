const iconMenuHamburguesa = document.getElementsByClassName("icon-menu-hamburguesa");
const menu = document.getElementsByClassName("menu");
const modaMenu = document.getElementsByClassName("moda-menu");
console.log(iconMenuHamburguesa);
console.log("ricardo");
iconMenuHamburguesa.addEventListener("click", function () {
  console.log("nisman");
  menu.classList.toggle("menu1");
});
