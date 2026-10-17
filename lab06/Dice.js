
class Dice {
    constructor(numberOfDice = 5) {
        this.numberOfDice = numberOfDice;
        this.values = Array(numberOfDice).fill(1);
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollAll() {
        this.values = this.values.map(() => this.roll());
        return this.values;
    }
}

export default Dice;
