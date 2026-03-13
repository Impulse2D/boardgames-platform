import { state } from "./state.js";

const modalForm = document.querySelector(".modal__form");
const emailInput = document.querySelector(".modal__input--email");
const passwordInput = document.querySelector(".modal__input--password");
const modalError = document.querySelector(".modal__error");

function setLoginFormEmailState(value) {
  state.loginForm.email = value;
}

function setLoginFormPasswordState(value) {
  state.loginForm.password = value;
}

function setLoginFormErrorState(text) {
  state.loginForm.error = text;
}

function renderLoginFormError() {
  if (modalError) {
    modalError.textContent = state.loginForm.error;
  }
}

function renderLoginFormFields() {
  if (emailInput) {
    emailInput.value = state.loginForm.email;
  }

  if (passwordInput) {
    passwordInput.value = state.loginForm.password;
  }
}

function validateLoginForm() {
  const email = state.loginForm.email.trim();
  const password = state.loginForm.password.trim();

  if (email === "") {
    return "Введите email";
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    return "Введите корректный email";
  }

  if (password.length < 4) {
    return "Пароль должен содержать минимум 4 символа";
  }

  return "";
}

export function resetLoginForm() {
  state.loginForm.email = "";
  state.loginForm.password = "";
  state.loginForm.error = "";

  renderLoginFormFields();
  renderLoginFormError();
}

function handleEmailInput(event) {
  setLoginFormEmailState(event.target.value);
  setLoginFormErrorState("");
  renderLoginFormError();
}

function handlePasswordInput(event) {
  setLoginFormPasswordState(event.target.value);
  setLoginFormErrorState("");
  renderLoginFormError();
}

export function initLoginForm({ onSuccess } = {}) {
  function handleLoginSubmit(event) {
    event.preventDefault();

    state.loginForm.email = state.loginForm.email.trim();
    state.loginForm.password = state.loginForm.password.trim();

    const errorText = validateLoginForm();

    setLoginFormErrorState(errorText);
    renderLoginFormFields();
    renderLoginFormError();

    if (errorText !== "") {
      return;
    }

    console.log("Login data:", state.loginForm.email, state.loginForm.password);

    onSuccess?.();
  }

  emailInput?.addEventListener("input", handleEmailInput);
  passwordInput?.addEventListener("input", handlePasswordInput);
  modalForm?.addEventListener("submit", handleLoginSubmit);

  resetLoginForm();
}