const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const headerUser = document.querySelector(".header__user");
const navLinks = document.querySelectorAll(".nav__link");

if (burger && nav && headerUser) {
    function openMenu() {
        nav.classList.add("nav--open");
        headerUser.classList.add("header__user--open");
        burger.classList.add("burger--active");
    }

    function closeMenu() {
        nav.classList.remove("nav--open");
        headerUser.classList.remove("header__user--open");
        burger.classList.remove("burger--active");
    }

    function toggleMenu() {
        const isMenuOpen = nav.classList.contains("nav--open");

        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

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
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}