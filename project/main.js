import { isKeyEscape } from "./utils/helpers.js";
import { initBurgerMenu, closeMenu } from "./modules/burger-menu.js";
import { initModal, closeModal } from "./modules/modal.js";
import { initLoginForm, resetLoginForm } from "./modules/login-form.js";

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

  initModal({
    closeMenu, /*от бургера */
    onOpen: resetLoginForm,
    onClose: resetLoginForm,
  });

  initLoginForm({
    onSuccess: closeModal,
  });

  initGlobalListeners();
}

initApp();