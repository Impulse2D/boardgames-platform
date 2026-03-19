import { handleGoToLobby } from "../modules/screen-handlers.js";

export function renderLanding(screenContent, state, renderApp) {
    screenContent.innerHTML = `
    <section>
      <h1>Landing screen</h1>
      <button id="go-to-lobby-button">Go to lobby</button>
    </section>
  `;

    const goToLobbyButton = screenContent.querySelector("#go-to-lobby-button");

    goToLobbyButton?.addEventListener("click", function () {
        handleGoToLobby(state, renderApp);
    });
}