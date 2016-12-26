const parseDiceString = (diceString) => {
    const dieRe = /\s*\+\s*/;
    const chunks = diceString.split(dieRe);
    return chunks;
    
}

const rollDie = (die, times) => {
  let min = 1;
  let max = die + 1;
  let total = 0;
  for (let i = 0; i < times; i++) {
    total += Math.floor(Math.random() * (max - min)) + min;
  }
  return total;
}

const DiceException = (message) => {
    this.message = message;
    this.name = "DiceException";
}

const rollDice = (diceString) => {
    let chunks = parseDiceString(diceString);
    let cleanString = chunks.join(" + ");
    try {
        const total = chunks.reduce( (total, current) => {
            console.log('Current: ', current, ' Total: ', total);
            if (current.includes('d')) {
                let dice = current.split('d');
                if (dice.length !== 2) throw  new DiceException(`Invalid String: ${diceString}`);
                let die = parseInt(dice[1], 10);
                let times = parseInt(dice[0], 10);
                return rollDie(die, times);
            } else {
                return total + parseInt(current, 10);
            }
        }, 0);

        const roll = {'time': new Date().getTime(), 'dice': cleanString, total };
        return roll;
    } catch (e) {
        throw e;
    }

}

export { rollDice };
