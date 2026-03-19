import {
    SCREEN_LANDING,
    SCREEN_LOBBY,
    SCREEN_ROOM,
    SCREEN_GAME,
    SCREEN_RESULT
} from "../modules/screens.js";

export function handleGoToLobby(state, renderApp) {
    state.currentScreen = SCREEN_LOBBY;
    renderApp();
}

export function handleBackToLanding(state, renderApp) {
    state.currentScreen = SCREEN_LANDING;
    renderApp();
}

export function handleGoToRoom(state, renderApp) {
    state.currentScreen = SCREEN_ROOM;
    renderApp();
}

export function handleGoToGame(state, renderApp) {
    state.currentScreen = SCREEN_GAME;
    renderApp();
}

export function handleGoToResult(state, renderApp) {
    state.currentScreen = SCREEN_RESULT;
    renderApp();
}

export function handleGoToLanding(state, renderApp) {
    state.currentScreen = SCREEN_LANDING;
    renderApp();
}