"use strict";
window.onload = function () {
  const searchInput = document.querySelector(".header-search__bl");
  const searchValue = document.querySelector(".header-search__input");
  const searchBlock = document.querySelector(".h-search__block");

  const navLinks = document.querySelectorAll(".nav__link");
  // const navLinkBlock = navLinks

  searchInput.addEventListener("keydown", (e) => {
    if (searchValue.value > "") {
      searchBlock.classList.add("active");
      console.log(searchValue.value);
    } else {
      searchBlock.classList.remove("active");
    }
  });

  navLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
      el.classList.toggle("active");
      el.querySelector(".bl-nav__link").classList.toggle("active");
    });
  });
};
