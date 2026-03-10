/* =========================
   DOM ELEMENTS
========================= */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const headerUser = document.querySelector(".header__user");
const navLinks = document.querySelectorAll(".nav__link");

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const modalForm = document.querySelector(".modal__form");
const emailInput = document.querySelector(".modal__input--email");
const passwordInput = document.querySelector(".modal__input--password");
const modalError = document.querySelector(".modal__error");

/* =========================
   HELPERS
========================= */

function isKeyEscape(event) {
  return event.key === "Escape";
}

function isMenuOpen() {
  if (!nav) {
    return false;
  }

  return nav.classList.contains("nav--open");
}

function clearModalError() {
  if (!modalError) {
    return;
  }

  modalError.textContent = "";
}

function resetModalForm() {
  if (!modalForm) {
    return;
  }

  modalForm.reset();
  clearModalError();
}

/* =========================
   MENU ACTIONS
========================= */

function openMenu() {
  if (!burger || !nav || !headerUser) {
    return;
  }

  nav.classList.add("nav--open");
  headerUser.classList.add("header__user--open");
  burger.classList.add("burger--active");
}

function closeMenu() {
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

/* =========================
   MODAL ACTIONS
========================= */

function openModal() {
  if (!modal) {
    return;
  }

  closeMenu();
  resetModalForm();
  modal.classList.add("modal--active");
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("modal--active");
  resetModalForm();
}

/* =========================
   FORM ACTIONS
========================= */

function handleLoginSubmit(event) {
  if (!emailInput || !passwordInput || !modalError) return;

  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  clearModalError();

  if (email === "") {
    modalError.textContent = "Введите email";
    return;
  }

  if (password.length < 4) {
    modalError.textContent = "Пароль должен содержать минимум 4 символа";
    return;
  }

  console.log("Login data:", email, password);
  closeModal();
}

/* =========================
   INIT: BURGER MENU
========================= */

function initBurgerMenu() {
  if (!burger || !nav || !headerUser) return;

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

/* =========================
   INIT: MODAL
========================= */

function initModal() {
  if (!headerUser || !modalCloseButton || !modalOverlay || !modal) {
    return;
  }

  headerUser.addEventListener("click", openModal);
  modalCloseButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
}

/* =========================
   INIT: LOGIN FORM
========================= */

function initLoginForm() {
  if (!emailInput || !passwordInput || !modalForm || !modalError) {
    return;
  }

  emailInput.addEventListener("input", clearModalError);
  passwordInput.addEventListener("input", clearModalError);
  modalForm.addEventListener("submit", handleLoginSubmit);
}

/* =========================
   INIT: GLOBAL LISTENERS
========================= */

function initGlobalListeners() {
  document.addEventListener("keydown", function (event) {
    if (!isKeyEscape(event)) {
      return;
    }

    closeMenu();
    closeModal();
  });
}

/* =========================
   APP INIT
========================= */

function initApp() {
  initBurgerMenu();
  initModal();
  initLoginForm();
  initGlobalListeners();
}

initApp();