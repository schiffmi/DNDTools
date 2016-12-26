import React, { Component } from 'react';

class DiceRollInput extends Component {
    constructor(props) {
        super(props);
        this.state = { input: ''};
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice(e) {
        if ((e.key && e.key === 'Enter') || !e.key) {
            this.props.inputHandler(this.state.input);    
            this.setState({'input': ''});
        }        
    }

    render() {
        return (
            <div className="diceinput">
                <div className="input-group">
                    <input className="form-input" 
                        type="text"
                        value={this.state.input}
                        onChange={e => this.setState({'input': e.target.value}) }
                        onKeyPress={this.rollDice} />
                    <button className="btn btn-primary input-group-btn"
                            onClick={this.rollDice}>Roll</button>
                </div>
            </div>
        );    
    }    
}

export default DiceRollInput;