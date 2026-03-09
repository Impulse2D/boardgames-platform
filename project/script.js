const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

if (burger && nav) {

    function toggleMenu() {
        nav.classList.toggle("nav--open");
        burger.classList.toggle("burger--active");
    }

    burger.addEventListener("click", toggleMenu);

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("nav--open");
            burger.classList.remove("burger--active");
        });
    });

}

document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
        nav.classList.remove("nav--open");
        burger.classList.remove("burger--active");
    }
});