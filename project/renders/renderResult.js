import { handleGoToLanding } from "../modules/screen-handlers.js";


export function renderResult(screenContent, state, renderApp) {
    screenContent.innerHTML = `
    <section>
        <h1>Result screen</h1>
        <button id="go-to-landing-button">Go to landing</button>
    </section>
    `;

    const goToLandingButton = screenContent.querySelector("#go-to-landing-button");

    goToLandingButton?.addEventListener("click", function () {
        handleGoToLanding(state, renderApp);
    });
}