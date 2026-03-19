import { handleGoToRoom, handleBackToLanding } from "../modules/screen-handlers.js";

export function renderLobby(screenContent, state, renderApp) {
    screenContent.innerHTML = `
    <section>
      <h1>Lobby screen</h1>
      <button id="go-to-room-button">Go to room</button>
      <button id="back-to-landing">Back</button>
    </section>
  `;

    const backButton = screenContent.querySelector("#back-to-landing");

    backButton?.addEventListener("click", function () {
        handleBackToLanding(state, renderApp);
    });

    const goToRoomButton = screenContent.querySelector("#go-to-room-button");

    goToRoomButton?.addEventListener("click", function () {
        handleGoToRoom(state, renderApp);
    });
}