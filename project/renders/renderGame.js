import { handleGoToResult } from "../modules/screen-handlers.js";

export function renderGame(screenContent, state, renderApp) {
    screenContent.innerHTML = `
    <section>
        <h1>Game screen</h1>
        <button id="go-to-result-button">Go to result</button>
    </section>
    `;

    const goToResultButton = screenContent.querySelector("#go-to-result-button");

    goToResultButton?.addEventListener("click", function () {
        handleGoToResult(state, renderApp);
    })
}