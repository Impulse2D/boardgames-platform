import { state } from "./state.js";

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const headerLogin = document.querySelector(".header__login");

function renderModal() {
  modal?.classList.toggle("modal--active", state.isLoginModalOpen);
}

function openModal() {
  state.isLoginModalOpen = true;
  renderModal();
}

export function closeModal() {
  state.isLoginModalOpen = false;
  renderModal();
}

export function initModal({ onOpen, onClose, closeMenu } = {}) {
  function handleOpenModal(event) {
    event.preventDefault();
    closeMenu?.();
    openModal();
    onOpen?.();
  }

  function handleCloseModal() {
    closeModal();
    onClose?.();
  }

  headerLogin?.addEventListener("click", handleOpenModal);
  modalCloseButton?.addEventListener("click", handleCloseModal);
  modalOverlay?.addEventListener("click", handleCloseModal);

  renderModal();
}