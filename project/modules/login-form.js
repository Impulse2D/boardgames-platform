import { clearModalError, closeModal } from "./modal.js";

const modalForm = document.querySelector(".modal__form");
const emailInput = document.querySelector(".modal__input--email");
const passwordInput = document.querySelector(".modal__input--password");
const modalError = document.querySelector(".modal__error");

function handleLoginSubmit(event) {
  if (!emailInput || !passwordInput || !modalError) {
    return;
  }

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

export function initLoginForm() {
  if (!emailInput || !passwordInput || !modalForm || !modalError) {
    return;
  }

  emailInput.addEventListener("input", clearModalError);
  passwordInput.addEventListener("input", clearModalError);
  modalForm.addEventListener("submit", handleLoginSubmit);
}