
import Dice from "./Dice.js";
import YatzyEngine from "./YatzyEngine.js";

class YatzyGame {
    constructor() {
        this.dice = new Dice(5);
        this.engine = new YatzyEngine();
        this.currentPlayer = 1;
        this.currentRound = 1;
        this.totalScore = 0;
        this.isGameOver = false;
    }

    startNewGame() {
        // Initialize a new game
        this.currentPlayer = 1;
        this.currentRound = 1;
        this.totalScore = 0;
        this.isGameOver = false;
        this.engine.resetScores();
    }

    endTurn() {
        // End the current turn and advance the game
    }

    endGame() {
        // Finalize the game and determine the winner
        this.isGameOver = true;
    }
}

export default YatzyGame;
