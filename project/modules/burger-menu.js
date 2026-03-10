const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const headerUser = document.querySelector(".header__user");
const navLinks = document.querySelectorAll(".nav__link");

function isMenuOpen() {
  if (!nav) {
    return false;
  }

  return nav.classList.contains("nav--open");
}

export function openMenu() {
  if (!burger || !nav || !headerUser) {
    return;
  }

  nav.classList.add("nav--open");
  headerUser.classList.add("header__user--open");
  burger.classList.add("burger--active");
}

export function closeMenu() {
  if (!burger || !nav || !headerUser) {
    return;
  }

  nav.classList.remove("nav--open");
  headerUser.classList.remove("header__user--open");
  burger.classList.remove("burger--active");
}

function toggleMenu() {
  if (isMenuOpen()) {
    closeMenu();
  } else {
    openMenu();
  }
}

export function initBurgerMenu() {
  if (!burger || !nav || !headerUser) {
    return;
  }

  burger.addEventListener("click", toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    const target = event.target;

    const isClickInsideNav = nav.contains(target);
    const isClickOnBurger = burger.contains(target);
    const isClickOnHeaderUser = headerUser.contains(target);

    if (!isClickInsideNav && !isClickOnBurger && !isClickOnHeaderUser) {
      closeMenu();
    }
  });
}