const menuBtn = document.querySelector(".menu-hamburguesa");
const sideMenu = document.querySelector(".side-menu");
const menuLinks = document.querySelectorAll(".side-menu a");

menuBtn.addEventListener("click", () => {

sideMenu.classList.toggle("active");

});

menuLinks.forEach(link => {

link.addEventListener("click", () => {

sideMenu.classList.remove("active");

});

});
