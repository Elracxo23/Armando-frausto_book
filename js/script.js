document.addEventListener("DOMContentLoaded", function () {

const menuBtn = document.querySelector(".menu-hamburguesa");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", function () {
sideMenu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".side-menu a");

menuLinks.forEach(link => {
link.addEventListener("click", () => {
sideMenu.classList.remove("active");
});
});

});
