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

  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == !document.querySelector("header__bl-logo")) {
      console.log("asdsad");
    }
  });
  navLinks.forEach((el) => {
    // console.log(tar.target);
    // console.log("asasdsda", el);
    // console.log(tar.target == document.querySelector(".nav__link__a"));
    el.addEventListener("click", (e) => {
      // console.log(e.target);
      // e.classList.add("active");
      // console.log(e.querySelector(".bl-nav__link"));
      // el.querySelector(".bl-nav__link").classList.toggle("active");
    });
    // el.classList.add("active");
    // el.querySelector(".bl-nav__link").classList.add("active");
  });
};
