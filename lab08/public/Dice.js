
class Dice {
    constructor(numberOfDice = 5) {
        this.numberOfDice = numberOfDice;
        this.values = Array(numberOfDice).fill(6);
    }

    // Get random dice values from the server.
    async rollAll() {
        try {
            const response = await fetch('/roll-dices');

            if (!response.ok) {
                throw new Error(
                    'Unable to roll dice. Check your server connection and try again.'
                );
            }

            const values = await response.json();

            // Validate the returned dice values.
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

        } catch (error) {
            console.error('Dice rolling error:', error);

            throw new Error(
                error.message || 'Unable to roll dice.'
            );
        }
    }
}

export default Dice;
