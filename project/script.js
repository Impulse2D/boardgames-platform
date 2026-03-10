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

/* Вспомогательные */

function isKeyEscape(event) {
    return event.key === "Escape";
}

function isMenuOpen() {
    if (!nav) {
        return false;
    }

    return nav.classList.contains("nav--open");
}

/* Открытие-Закрытие */

function openMenu() {
    if (!burger || !nav || !headerUser) return;

    nav.classList.add("nav--open");
    headerUser.classList.add("header__user--open");
    burger.classList.add("burger--active");
}

function closeMenu() {
    if (!burger || !nav || !headerUser) return;

    nav.classList.remove("nav--open");
    headerUser.classList.remove("header__user--open");
    burger.classList.remove("burger--active");
}

function openModal() {
    if (!modal) return;

    closeMenu();
    resetModalForm();
    modal.classList.add("modal--active");
}

function closeModal() {
    if (!modal) return;

    modal.classList.remove("modal--active");
    resetModalForm();
}

/* form helpers */

function clearModalError() {
    if (!modalError) return;

    modalError.textContent = "";
}

function resetModalForm() {
    if (!modalForm || !emailInput || !passwordInput || !modalError) return;

    modalForm.reset();
    clearModalError();
}

/* Бургер меню */

function toggleMenu() {
    if (isMenuOpen()) {
        closeMenu();
    } else {
        openMenu();
    }
}

if (burger && nav && headerUser) {
    burger.addEventListener("click", toggleMenu);

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);
        const isClickOnHeaderUser = headerUser.contains(event.target);

        if (!isClickInsideNav && !isClickOnBurger && !isClickOnHeaderUser) {
            closeMenu();
        }
    });
}

/* Модалка */

if (headerUser && modalCloseButton && modalOverlay) {
    headerUser.addEventListener("click", openModal);
    modalCloseButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
}

/* Формы */

if (emailInput && passwordInput) {
    emailInput.addEventListener("input", clearModalError);
    passwordInput.addEventListener("input", clearModalError);
}

if (modalForm && emailInput && passwordInput && modalError) {
    modalForm.addEventListener("submit", function (event) {
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
    });
}

/* global listeners */

document.addEventListener("keydown", function (event) {
    if (!isKeyEscape(event)) return;

    closeMenu();
    closeModal();
});