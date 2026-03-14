document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.querySelector(".menu-hamburguesa");
const sideMenu = document.querySelector(".side-menu");

if(menuBtn && sideMenu){

menuBtn.addEventListener("click", () => {

sideMenu.classList.toggle("active");

});

}

});
