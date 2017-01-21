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
                
                    <div className="form-group">
                        <div className="input-group">
                            <input className="form-control"
                                type="text"
                                value={this.state.input}
                                onChange={e => this.setState({'input': e.target.value}) }
                                onKeyPress={this.rollDice} />
                            <div className="input-group-addon roll-button" onClick={this.rollDice}>Roll
                            </div>
                        </div>
                    </div>
                
            </div>
        );    
    }    
}

export default DiceRollInput;