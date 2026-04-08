export function renderGame(screenContent, state, renderApp) {
    const round = state.match.currentRound;
    const player = state.match.currentTurnPlayer;

    let playerText = "—";

    if (player === "player1") {
        playerText = "Игрок 1";
    } else if (player === "player2") {
        playerText = "Игрок 2";
    }

    screenContent.innerHTML = `
<section>
    <p>Раунд: ${round}</p>
    <p>Ход: ${playerText}</p>
    <button class="turn-button">
        Передать ход
    </button>
</section>
    `;

    const turnButton = screenContent.querySelector(".turn-button");

    turnButton.addEventListener("click", () => {
        if (!state.match.currentTurnPlayer) {
            return;
        }

        if (state.match.currentTurnPlayer === "player1") {
            state.match.currentTurnPlayer = "player2";
        } else {
            state.match.currentTurnPlayer = "player1";
        }

        renderApp();
    });
}