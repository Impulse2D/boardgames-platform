import { closeMenu } from "./burger-menu.js";

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const headerUser = document.querySelector(".header__user");
const modalForm = document.querySelector(".modal__form");
const modalError = document.querySelector(".modal__error");

export function clearModalError() {
  if (!modalError) {
    return;
  }

  modalError.textContent = "";
}

export function resetModalForm() {
  if (!modalForm) {
    return;
  }

  modalForm.reset();
  clearModalError();
}

export function openModal() {
  if (!modal) {
    return;
  }

  closeMenu();
  resetModalForm();
  modal.classList.add("modal--active");
}

export function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("modal--active");
  resetModalForm();
}

export function initModal() {
  if (!headerUser || !modalCloseButton || !modalOverlay || !modal) {
    return;
  }

  headerUser.addEventListener("click", openModal);
  modalCloseButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
}