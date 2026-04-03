import { handleGoToLobby, handleGoToRoom } from "../modules/screen-handlers.js";

export function renderMatchmaking(screenContent, state, renderApp) {
  screenContent.innerHTML = `
    <section class="matchmaking-screen">
      <div class="matchmaking-card">
        <h1 class="matchmaking-title">Поиск соперника</h1>
        <p class="matchmaking-status">Идёт поиск...</p>
        <p id="matchmaking-timer" class="matchmaking-timer">0:00</p>

        <button id="cancel-matchmaking-button" class="matchmaking-button">
          Отмена
        </button>
      </div>
    </section>
  `;

  const timerElement = screenContent.querySelector("#matchmaking-timer");
  const cancelButton = screenContent.querySelector("#cancel-matchmaking-button");
  const matchmakingStatus = screenContent.querySelector(".matchmaking-status");

  let seconds = 0;
  let moveTimeoutId;

  const intervalId = setInterval(() => {
    seconds += 1;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    timerElement.textContent = `${minutes}:${formattedSeconds}`;
  }, 1000);

  const foundTimeoutId = setTimeout(() => {
    clearInterval(intervalId);

    matchmakingStatus.textContent = "Соперник найден";
    cancelButton.disabled = true;
    cancelButton.textContent = "Загрузка...";

    moveTimeoutId = setTimeout(() => {
      handleGoToRoom(state, renderApp);
    }, 1000);
  }, 3000);

  cancelButton?.addEventListener("click", () => {
    clearInterval(intervalId);
    clearTimeout(foundTimeoutId);

    if (moveTimeoutId) {
      clearTimeout(moveTimeoutId);
    }

    handleGoToLobby(state, renderApp);
  });
}