import { handleGoToMatchmaking, handleBackToLanding } from "../modules/screen-handlers.js";

export function renderLobby(screenContent, state, renderApp) {
  screenContent.innerHTML = `
    <section class="lobby-screen">
      <div class="lobby-card">

        <button id="back-to-landing-button" class="lobby-back-button">
          ← На главную
        </button>

        <h1 class="lobby-title">Лобби</h1>
        <p class="lobby-text">Выберите режим игры и начните матч.</p>

        <div class="lobby-actions">
          <button id="quick-match-button" class="lobby-button lobby-button-primary">
            Быстрая игра
          </button>

          <button id="bot-button" class="lobby-button lobby-button-secondary">
            Игра с ботом
          </button>

          <button class="lobby-button lobby-button-disabled" disabled>
            Комнаты (скоро)
          </button>
        </div>

      </div>
    </section>
  `;

  const backButton = screenContent.querySelector("#back-to-landing-button");
  const quickMatchButton = screenContent.querySelector("#quick-match-button");
  const botButton = screenContent.querySelector("#bot-button");

  backButton?.addEventListener("click", () => {
    handleBackToLanding(state, renderApp);
  });

  quickMatchButton?.addEventListener("click", () => {
    handleGoToMatchmaking(state, renderApp);
  });

  botButton?.addEventListener("click", () => {
    console.log("Игра с ботом (заглушка)");
  });
}