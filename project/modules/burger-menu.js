import { state } from "./state.js";

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const headerUser = document.querySelector(".header__user");
const menuOverlay = document.querySelector(".menu-overlay");
const navLinks = document.querySelectorAll(".nav__link");

function renderMenu() {
  nav?.classList.toggle("nav--open", state.isMenuOpen);
  headerUser?.classList.toggle("header__user--open", state.isMenuOpen);
  burger?.classList.toggle("burger--active", state.isMenuOpen);
  menuOverlay?.classList.toggle("menu-overlay--active", state.isMenuOpen);
}

function setMenu(open) {
  state.isMenuOpen = open;
  renderMenu();
}

export function closeMenu() {
  setMenu(false);
}

function toggleMenu() {
  setMenu(!state.isMenuOpen);
}

export function initBurgerMenu() {
  burger?.addEventListener("click", toggleMenu);
  menuOverlay?.addEventListener("click", closeMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  renderMenu();
}