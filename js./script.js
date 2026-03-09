document.addEventListener("DOMContentLoaded", function () {

const menuBtn = document.querySelector(".menu-hamburguesa");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", function () {

sideMenu.classList.toggle("active");

});

});
