import { state } from "./state.js";

const modalForm = document.querySelector(".modal__form");
const emailInput = document.querySelector(".modal__input--email");
const passwordInput = document.querySelector(".modal__input--password");
const modalError = document.querySelector(".modal__error");

function setLoginFormEmail(value) {
  state.loginForm.email = value;
}

function setLoginFormPassword(value) {
  state.loginForm.password = value;
}

function setLoginFormError(text) {
  state.loginForm.error = text;
}

function renderLoginForm() {
  if (modalError) {
    modalError.textContent = state.loginForm.error;
  }
}

function syncLoginFormFields() {
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

  syncLoginFormFields();
  renderLoginForm();
}

function handleEmailInput(event) {
  setLoginFormEmail(event.target.value);
  setLoginFormError("");
  renderLoginForm();
}

function handlePasswordInput(event) {
  setLoginFormPassword(event.target.value);
  setLoginFormError("");
  renderLoginForm();
}

export function initLoginForm({ onSuccess } = {}) {
  function handleLoginSubmit(event) {
    event.preventDefault();

    state.loginForm.email = state.loginForm.email.trim();
    state.loginForm.password = state.loginForm.password.trim();

    const errorText = validateLoginForm();

    setLoginFormError(errorText);
    syncLoginFormFields();
    renderLoginForm();

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