import { handleGoToLobby } from "../modules/screen-handlers.js";

export function renderLanding(screenContent, state, renderApp) {
  screenContent.innerHTML = `
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__label">HEX MATCH • STRATEGY</p>

          <h1 class="hero__title">Линии ресурсов</h1>

          <p class="hero__subtitle">
            Дуэльная тактическая игра 1 на 1.
            Строй линии, собирай ресурсы и переиграй соперника за 2 раунда.
          </p>

          <div class="hero__actions">
            <button
              type="button"
              id="go-to-lobby-button"
              class="hero__button hero__button--primary"
            >
              Играть
            </button>

            <button
              type="button"
              class="hero__button hero__button--secondary"
            >
              Правила
            </button>
          </div>
        </div>

        <div class="hero__visual">
          <div class="hero__preview">
            <div class="preview-hex">
              <div class="preview-row preview-row--top">
                <div class="preview-cell preview-cell--wood">🌲</div>
                <div class="preview-cell preview-cell--brick">🧱</div>
                <div class="preview-cell preview-cell--stone">🪨</div>
              </div>

              <div class="preview-row preview-row--top">
                <div class="preview-cell preview-cell--ore">🔩</div>
                <div class="preview-cell preview-cell--wood">🌲</div>
                <div class="preview-cell preview-cell--brick">🧱</div>
                <div class="preview-cell preview-cell--stone">🪨</div>
              </div>

              <div class="preview-row preview-row--center">
                <div class="preview-cell preview-cell--stone">🪨</div>
                <div class="preview-cell preview-cell--ore">🔩</div>
                <div class="preview-cell preview-cell--wood">🌲</div>
                <div class="preview-cell preview-cell--brick">🧱</div>
                <div class="preview-cell preview-cell--ore">🔩</div>
              </div>

              <div class="preview-row preview-row--bottom">
                <div class="preview-cell preview-cell--wood">🌲</div>
                <div class="preview-cell preview-cell--brick">🧱</div>
                <div class="preview-cell preview-cell--stone">🪨</div>
                <div class="preview-cell preview-cell--ore">🔩</div>
              </div>

              <div class="preview-row preview-row--bottom">
                <div class="preview-cell preview-cell--brick">🧱</div>
                <div class="preview-cell preview-cell--wood">🌲</div>
                <div class="preview-cell preview-cell--ore">🔩</div>
              </div>
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