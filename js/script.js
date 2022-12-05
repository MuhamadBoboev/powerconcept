"use strict";
window.onload = function () {
  let searchInput = document.querySelector(".header-search__bl");
  let searchValue = document.querySelector(".header-search__input");
  let searchBlock = document.querySelector(".h-search__block");
  let navLinks = document.querySelectorAll(".nav__link__a");
  let BurgerBtns = document.querySelectorAll(".header__burger");
  let HeaderPopup = document.querySelector(".popup");
  let searchLink = document.querySelector(".header-search__bl-btn");
  let mainPage = document.querySelector(".page");
  let pageSearch = document.querySelector(".page-search");
  let switchBtn = document.querySelector(".switch-btn");
  let body = document.body;

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
  searchLink.addEventListener("click", (e) => {
    if (searchValue.value > "") {
      pageSearch.classList.toggle("active");
      searchBlock.classList.remove("active");
      mainPage.classList.toggle("noActive");
      document
        .querySelector(".header-search__bl-nav-pages")
        .classList.add("noActive");
      document.querySelector(".header-search").style = "flex: 0 1 100%";
      document
        .querySelector(".header-search__close")
        .classList.toggle("active");
    }
  });
  document
    .querySelector(".header-search__close")
    .addEventListener("click", (e) => {
      pageSearch.classList.remove("active");
      searchBlock.classList.remove("active");
      mainPage.classList.remove("noActive");
      document
        .querySelector(".header-search__bl-nav-pages")
        .classList.remove("noActive");
      document.querySelector(".header-search").style = "flex: 0 1 50%";
      document
        .querySelector(".header-search__close")
        .classList.remove("active");
    });
  if (switchBtn) {
    switchBtn.addEventListener("click", (e) => {
      // console.log(switchBtn);
      switchBtn.classList.toggle("switch-on");
    });
  }
};
