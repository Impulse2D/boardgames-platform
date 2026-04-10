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

  areBothPlayersConnected: true,

  match: {
    isStarted: false,
    currentRound: 1,
    currentTurnPlayer: null,
    startingPlayer: null,
    movesCount: 0
  },

  loginForm: {
    email: "",
    password: "",
    error: ""
  }
};
