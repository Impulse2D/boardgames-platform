import { closeMenu } from "./burger-menu.js";
import { state } from "./state.js";

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const headerUser = document.querySelector(".header__user");
const modalForm = document.querySelector(".modal__form");
const modalError = document.querySelector(".modal__error");

function renderModal() {
  modal?.classList.toggle("modal--active", state.isLoginModalOpen);
}

function setLoginModal(open) {
  state.isLoginModalOpen = open;
  renderModal();
}

export function clearModalError() {
  modalError.textContent = "";
}

export function resetModalForm() {
  state.loginForm.email = "";
  state.loginForm.password = "";
  state.loginForm.error = "";

  modalForm?.reset();
  clearModalError();
}

export function openModal() {
  setLoginModal(true);
  closeMenu();
  resetModalForm();
}

export function closeModal() {
  setLoginModal(false);
  resetModalForm();
}

export function initModal() {
  headerUser?.addEventListener("click", openModal);
  modalCloseButton?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", closeModal);

  renderModal();
}