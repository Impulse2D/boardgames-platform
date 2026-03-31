import { SCREEN_LANDING } from "../modules/screens.js";

export const state = {
  isMenuOpen: false,
  isLoginModalOpen: false,

  currentScreen: SCREEN_LANDING,

  loginForm: {
    email: "",
    password: "",
    error: ""
  }
}