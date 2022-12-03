"use strict";
window.onload = function () {
  const searchInput = document.querySelector(".header-search__bl");
  const searchValue = document.querySelector(".header-search__input");
  const searchBlock = document.querySelector(".h-search__block");
  const navLinks = document.querySelectorAll(".nav__link__a");
  const BurgerBtns = document.querySelectorAll(".header__burger");
  const HeaderPopup = document.querySelector(".popup");
  const body = document.body;

  searchInput.addEventListener("keydown", (e) => {
    if (searchValue.value > "") {
      searchBlock.classList.add("active");
      console.log(searchValue.value);
    } else {
      searchBlock.classList.remove("active");
    }
  });
  BurgerBtns.forEach((e) => {
    e.addEventListener("click", (e) => {
      HeaderPopup.classList.toggle("active");
      body.classList.toggle("active");
    });
  });
  navLinks.forEach((e) => {
    e.addEventListener("click", (el) => {
      e.parentElement
        .querySelector(".p-bl-nav__link")
        .classList.toggle("active");
      e.classList.toggle("active");
    });
  });
};
