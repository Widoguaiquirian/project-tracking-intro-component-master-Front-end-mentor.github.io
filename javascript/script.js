"use strict";
const menuBtn = document.querySelector(".menu__btn");
const navMobile = document.querySelector(".nav__mobile");
const btnHamburguer = document.querySelector(".btnHamburguer");
const btnCloseMenu = document.querySelector(".btnClose");

menuBtn.addEventListener("click", function () {
   navMobile.classList.toggle("active");
   btnCloseMenu.classList.toggle("active");
   btnHamburguer.classList.toggle("active");
});
