import {
  SCREEN_LANDING,
  SCREEN_LOBBY,
  SCREEN_MATCHMAKING,
  SCREEN_ROOM,
  SCREEN_GAME,
  SCREEN_RESULT
} from "../modules/screens.js";

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