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
        this.currentPlayer = 1;
        this.currentRound = 1;
        this.totalScore = 0;
        this.isGameOver = false;
        this.engine.resetScores();
    }

    async rollDice() {
        try {
            return await this.dice.rollAll();
        } catch (error) {
            console.error("Unable to roll dice. Please try again.", error);
            throw error;
        }
    }

    endTurn() {
        // End the current turn and advance the game
    }

    endGame() {
        this.isGameOver = true;
    }
}

export default YatzyGame;