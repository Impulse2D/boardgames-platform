import { isKeyEscape } from "./utils/helpers.js";
import { initBurgerMenu, closeMenu } from "./modules/burger-menu.js";
import { initModal, closeModal } from "./modules/modal.js";
import { initLoginForm } from "./modules/login-form.js";

function initGlobalListeners() {
  document.addEventListener("keydown", function (event) {
    if (!isKeyEscape(event)) {
      return;
    }

    closeMenu();
    closeModal();
  });
}

function initApp() {
  initBurgerMenu();
  initModal();
  initLoginForm();
  initGlobalListeners();
}

initApp();