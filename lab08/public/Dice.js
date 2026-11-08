class Dice {
    constructor(numberOfDice = 5) {
        this.numberOfDice = numberOfDice;
        this.values = Array(numberOfDice).fill(1);
    }

    async rollAll() {
        const response = await fetch('/roll-dices');

        if (!response.ok) {
            throw new Error('Unable to roll dice. Check your server connection and try again.');
        }

        const values = await response.json();

        if (
            !Array.isArray(values) ||
            values.length !== this.numberOfDice ||
            !values.every(value =>
                Number.isInteger(value) && value >= 1 && value <= 6
            )
        ) {
            throw new Error('Invalid dice values received from the server.');
        }

        this.values = values;
        return this.values;
    }
}

export default Dice;