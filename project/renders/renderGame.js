export function renderGame(screenContent, state, renderApp) {
  const round = state.match.currentRound;
  const currentPlayer = state.match.currentTurnPlayer;
  const startingPlayer = state.match.startingPlayer;
  const isSecondRound = round === 2;
  const maxRoundNumber = 2;

  const players = [
    { id: "player1", text: "Игрок 1" },
    { id: "player2", text: "Игрок 2" }
  ];

  function getPlayerText(playerId) {
    const player = players.find((item) => item.id === playerId);

    if (!player) {
      return "—";
    }

    return player.text;
  }

  function getOppositePlayer(playerId) {
    const oppositePlayer = players.find((item) => item.id !== playerId);

    if (!oppositePlayer) {
      return null;
    }

    return oppositePlayer.id;
  }

  screenContent.innerHTML = `
    <section>
      <p>Раунд: ${round}</p>
      <p>Ход: ${getPlayerText(currentPlayer)}</p>

      <button class="turn-button">
        Передать ход
      </button>

      <button class="switch-rounds-button">
        Начать 2 раунд
      </button>
    </section>
  `;

  const turnButton = screenContent.querySelector(".turn-button");
  const switchRoundsButton = screenContent.querySelector(".switch-rounds-button");

  turnButton?.addEventListener("click", () => {
    if (!state.match.currentTurnPlayer) {
      return;
    }

    const nextPlayer = getOppositePlayer(state.match.currentTurnPlayer);

    if (!nextPlayer) {
      return;
    }

    state.match.currentTurnPlayer = nextPlayer;

    renderApp();
  });

  switchRoundsButton?.addEventListener("click", () => {
    if (!startingPlayer || isSecondRound) {
      return;
    }

    const secondRoundStartingPlayer = getOppositePlayer(startingPlayer);

    if (!secondRoundStartingPlayer) {
      return;
    }

    state.match.currentRound = maxRoundNumber;
    state.match.currentTurnPlayer = secondRoundStartingPlayer;

    renderApp();
  });
}