import React, { Component } from 'react';

import '../styles/spell.css';

class Spell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,            
        }
    }

    renderNotSelected() {
        const { spell } = this.props;
        return (
          <section onClick={() => this.setState({selected: true})} className="spell-row">
            <div className="columns col-gapless">
              <div className="column col-3">
                <span>{spell.name}</span>
              </div>
              <div className="column col-3">
                <span>{spell.level}</span>
              </div>
              <div className="column col-3">
                <span>{spell.duration}</span>
              </div>
              <div className="column col-3">
                <span>{spell.casting_time}</span>
              </div>              
            </div>
          </section>
        );
    }

    render() {
        return this.renderNotSelected();
    }
}

export default Spell;
