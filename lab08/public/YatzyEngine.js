
class YatzyEngine {
    constructor() {
        this.scoreTable = {
            ones: null,
            twos: null,
            threes: null,
            fours: null,
            fives: null,
            sixes: null,
            onePair: null,
            twoPairs: null,
            threeOfAKind: null,
            fourOfAKind: null,
            smallStraight: null,
            largeStraight: null,
            fullHouse: null,
            chance: null,
            yatzy: null
        };
    }

    calculateScore(category, diceValues) {
        // Calculate the score for the selected category
        return 0;
    }

    isValidSelection(category, diceValues) {
        // Check whether the selection is valid
        return false;
    }

    resetScores() {
        // Reset all categories for a new game
        Object.keys(this.scoreTable).forEach(category => {
            this.scoreTable[category] = null;
        });
    }
}

export default YatzyEngine;
