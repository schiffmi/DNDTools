import React, { Component } from 'react';
import { rollDice } from '../utilities';
import DiceRollHistory from './dicehistory';
import DiceRollInput from './dicerollinput';
import '../styles/diceroller.css';

class DiceRoller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [{'time': 1, 'dice': '2d6', total: 7}, 
                    {'time': 2, 'dice': '2d8 + 2', total: 13},
                    {'time': 3, 'dice': '1d6', total: 4},
                    {'time': 4, 'dice': '2d6 + 5', total: 9}],
        }
        this.rollDice = this.rollDice.bind(this);
    }
    
    rollDice(diceString) {
        console.log(diceString);
        try {
            let roll = rollDice(diceString); 
            console.log(roll);           
            this.setState({rolls: [...this.state.rolls, roll ]});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="diceroller">
                <DiceRollHistory history={this.state.rolls} />
                <DiceRollInput inputHandler={this.rollDice} />
            </div>
        );
    }
}

export default DiceRoller;