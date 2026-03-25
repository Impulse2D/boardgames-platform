export function renderLobby(screenContent, state, renderApp) {
  screenContent.innerHTML = `
    <section class="lobby">
      <h1 class="lobby__title">Лобби</h1>

      <p class="lobby__subtitle">
        Выберите режим игры и начните матч.
      </p>

      <div class="lobby__actions">
        <button id="quick-match-button" class="lobby__button lobby__button--primary">
          Быстрая игра
        </button>

        <button id="bot-button" class="lobby__button lobby__button--secondary">
          Игра с ботом
        </button>

        <button class="lobby__button lobby__button--disabled" disabled>
          Комнаты (скоро)
        </button>
      </div>
    </section>
  `;

  const quickMatchButton = screenContent.querySelector("#quick-match-button");
  const botButton = screenContent.querySelector("#bot-button");

  quickMatchButton?.addEventListener("click", () => {
    console.log("Быстрая игра (заглушка)");
  });

  botButton?.addEventListener("click", () => {
    console.log("Игра с ботом (заглушка)");
  });
}