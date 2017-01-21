import React, { Component } from 'react';

class DiceRollHistory extends Component {
    componentDidUpdate() {
        this.scrollBottom();    
    }
    componentDidMount() {
        this.scrollBottom();
    }

    scrollBottom() {
        this.histElem.scrollTop = this.histElem.scrollHeight;
    }

    render() {
        const { history } = this.props;
        let historyRows = history.map( roll => {
            return (
                <tr key={roll.time}><td>{ roll.dice }: { roll.total }</td></tr>
            );
        });

        return (
            <div className="rollhistory" ref={ elem => this.histElem = elem }>
                <table className="table table-striped">
                    <tbody>
                        { historyRows }
                   </tbody>
                </table>
            </div>
        );
    }
}

export default DiceRollHistory;
