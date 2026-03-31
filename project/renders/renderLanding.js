import { handleGoToLobby } from "../modules/screen-handlers.js";

export function renderLanding(screenContent, state, renderApp) {
  screenContent.innerHTML = `
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__label">Тактическая игра 1 на 1</p>

          <h1 class="hero__title">Прорыв: Контроль</h1>

          <p class="hero__subtitle">
            Прорывай оборону противника или выталкивай его юниты с поля, чтобы победить.
          </p>

          <div class="hero__actions">
            <button id="go-to-lobby-button" class="hero__button hero__button--primary">
              Играть
            </button>

            <button type="button" class="hero__button hero__button--secondary">
              Правила
            </button>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__preview">
            <div class="preview-board">
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell p2"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>

              <div class="preview-cell"></div>
              <div class="preview-cell p2"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell p2"></div>
              <div class="preview-cell"></div>

              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>

              <div class="preview-cell"></div>
              <div class="preview-cell p1"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell p1"></div>
              <div class="preview-cell"></div>

              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell p1"></div>
              <div class="preview-cell"></div>
              <div class="preview-cell"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const goToLobbyButton = screenContent.querySelector("#go-to-lobby-button");

  goToLobbyButton?.addEventListener("click", function () {
    goToLobbyButton.disabled = true;
    goToLobbyButton.textContent = "Загрузка...";

    setTimeout(function () {
      handleGoToLobby(state, renderApp);
    }, 400);
  });
}