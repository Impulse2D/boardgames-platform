const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal");
const headerUser = document.querySelector(".header__user");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const navLinks = document.querySelectorAll(".nav__link");

function isKeyEscape(event) {
    return event.key === "Escape";
}

function isMenuOpen() {
    if (!nav) {
        return false;
    }

    return nav.classList.contains("nav--open");
}

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

    document.addEventListener("keydown", function (event) {
        if (isKeyEscape(event)) {
            closeMenu();
        }
    });
}

if (modal && modalOverlay && headerUser && modalCloseButton) {
    function openModal() {
        closeMenu();
        modal.classList.add("modal--active");
    }

    function closeModal() {
        modal.classList.remove("modal--active");
    }

    headerUser.addEventListener("click", openModal);
    modalCloseButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (event) {
        if (isKeyEscape(event)) {
            closeModal();
        }
    });
}