export function renderGame(screenContent, state, renderApp) {
  const maxRoundNumber = 2;
  const maxMovesCount = 5;

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
      <p>Раунд: ${state.match.currentRound}</p>
      <p>Ход: ${getPlayerText(state.match.currentTurnPlayer)}</p>
      <p>Ходов в раунде: ${state.match.movesCount}</p>
      <button class="turn-button">
        Передать ход
      </button>
    </section>
  `;

  const turnButton = screenContent.querySelector(".turn-button");

  function switchRound() {
    if (!state.match.startingPlayer || state.match.currentRound === 2) {
      return;
    }

    const secondRoundStartingPlayer = getOppositePlayer(state.match.startingPlayer);

    if (!secondRoundStartingPlayer) {
      return;
    }

    state.match.currentRound = maxRoundNumber;
    state.match.currentTurnPlayer = secondRoundStartingPlayer;
  }

  function turnPlayer() {
    if (!state.match.currentTurnPlayer) {
      return;
    }

    const nextPlayer = getOppositePlayer(state.match.currentTurnPlayer);

    if (!nextPlayer) {
      return;
    }

    state.match.movesCount++;

    const isMaxMovesCount = state.match.movesCount === maxMovesCount;

    if (isMaxMovesCount) {
      state.match.movesCount = 0;
      if (state.match.currentRound === 1) {
        switchRound();
      }
      else if (state.match.currentRound === 2) {
        console.log("GoToResult");
      }
    } else {
      state.match.currentTurnPlayer = nextPlayer;
    }

    renderApp();
  }

  turnButton?.addEventListener("click", () => {
    turnPlayer();
  });
}