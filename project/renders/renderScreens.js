import {
    SCREEN_LANDING,
    SCREEN_LOBBY,
    SCREEN_MATCHMAKING,
    SCREEN_ROOM,
    SCREEN_GAME,
    SCREEN_RESULT
} from "../modules/screens.js";

import { renderLanding } from "./renderLanding.js";
import { renderLobby } from "./renderLobby.js";
import { renderMatchmaking } from "./renderMatchmaking.js";
import { renderRoom } from "./renderRoom.js";
import { renderGame } from "./renderGame.js";
import { renderResult } from "./renderResult.js";

export function renderScreens(state, renderApp) {
    const screenContent = document.querySelector("#screen-content");

    if (!screenContent) return;

    switch (state.currentScreen) {
        case SCREEN_LANDING:
            renderLanding(screenContent, state, renderApp);
            break;

        case SCREEN_LOBBY:
            renderLobby(screenContent, state, renderApp);
            break;

        case SCREEN_MATCHMAKING:
            renderMatchmaking(screenContent, state, renderApp);
            break;

        case SCREEN_ROOM:
            renderRoom(screenContent, state, renderApp);
            break;

        case SCREEN_GAME:
            renderGame(screenContent, state, renderApp);
            break;

        case SCREEN_RESULT:
            renderResult(screenContent, state, renderApp);
            break;

        default:
            screenContent.innerHTML = `<h1>Unknown screen</h1>`;
    }
}