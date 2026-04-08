import { handleGoToGame, handleGoToLobby } from "../modules/screen-handlers.js";

export function renderRoom(screenContent, state, renderApp) {
  const statusText = state.areBothPlayersConnected
    ? "Оба игрока в комнате"
    : "Ожидание второго игрока";

  const hintText = state.areBothPlayersConnected
    ? "Нажмите «Начать игру», когда будете готовы"
    : "";

  const isStartButtonDisabled = !state.areBothPlayersConnected;

  screenContent.innerHTML = `
    <section class="room-screen">
      <div class="room-card">
        <div class="room-header">
          <button id="back-to-lobby-button" class="room-back-button">
            ← Назад
          </button>

          <h1 class="room-title">Комната</h1>
        </div>

        <div class="room-players">
          <div class="room-player-card">
            <p class="room-player-title">Вы</p>
            <p class="room-player-subtitle">Игрок 1</p>
          </div>

          <div class="room-vs">VS</div>

          <div class="room-player-card">
            <p class="room-player-title">Соперник</p>
            <p class="room-player-subtitle">Игрок 2</p>
          </div>
        </div>

        <div class="room-bottom">
          <div class="status-block">
            <p class="room-status-text">${statusText}</p>
            ${hintText ? `<p class="room-status-hint">${hintText}</p>` : ""}
          </div>

          <button
            id="start-game-button"
            class="room-button"
            ${isStartButtonDisabled ? "disabled" : ""}
          >
            Начать игру
          </button>
        </div>
      </div>
    </section>
  `;

  const goToGameButton = screenContent.querySelector("#start-game-button");
  const goToLobbyButton = screenContent.querySelector("#back-to-lobby-button");

  goToGameButton?.addEventListener("click", () => {
    if (state.areBothPlayersConnected) {
      state.match.isStarted = true;
      state.match.currentRound = 1;
      state.match.currentTurnPlayer = "player1";

      handleGoToGame(state, renderApp);
    }
  });

  goToLobbyButton?.addEventListener("click", () => {
    handleGoToLobby(state, renderApp);
  });
}