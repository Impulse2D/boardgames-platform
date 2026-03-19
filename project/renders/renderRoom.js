import { handleGoToGame } from "../modules/screen-handlers.js";

export function renderRoom(screenContent, state, renderApp) {
    screenContent.innerHTML = `
    <section>
        <h1>Room screen</h1>
        <button id="go-to-game-button">Go to Game</button>
    </section>
    `;

    const goToGameButton = screenContent.querySelector("#go-to-game-button");

    goToGameButton?.addEventListener("click", function () {
        handleGoToGame(state, renderApp);
    });
}