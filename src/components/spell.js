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
              <div className="column col-md-2">
                <span>{spell.name}</span>
              </div>
              <div className="column col-md-1">
                <span>{spell.level}</span>
              </div>
              <div className="column col-md-2">
                <span>{ spell.requirements.class.join(' | ') }</span>
              </div>
              <div className="column col-md-3">
                <span>{spell.requirements.school}</span>
              </div>
              <div className="column col-md-1">
                <span>{spell.duration}</span>
              </div>
              <div className="column col-md-1">
                <span>{spell.casting_time}</span>
              </div>              
            </div>
          </section>
        );
    }

    renderSelected() {
      const { spell } = this.props;
      return (
        <section className="spell-row spell-selected">
          <section className="title spell-section">
            <div className="columns col-gapless">
              <div className="column col-11">
                <div className="name">{ spell.name }</div>
                <div className="description">{spell.level} {spell.requirements.school} [{spell.page}]</div>
              </div>
              <div className="column col-1"><button className="btn btn-default btn-sm" onClick={() => this.setState({selected: false})}>hide</button></div>
            </div>
          </section>
          { /* Important Stats */ }
          <section className="spell-section" >
            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Range</span></div>
              <div className="column col-10">{spell.range}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Casting Time</span></div>
              <div className="column col-10">{spell.casting_time}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Duration</span></div>
              <div className="column col-10">{spell.duration}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Range</span></div>
              <div className="column col-10">{spell.range}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Class</span></div>
              <div className="column col-10">{spell.requirements.class}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Domain</span></div>
              <div className="column col-10">{spell.requirements.domain}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Concentration</span></div>
              <div className="column col-10">{spell.concentration}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Ritual</span></div>
              <div className="column col-10">{spell.ritual}</div>
            </div>

            <div className="columns col-gapless">
              <div className="column col-2"><span className="field-label">Components</span></div>
              <div className="column col-10">{spell.components}</div>
            </div>

          </section>
          { /* Desc */ }
          <section className="spell-section">
            <div className="section-title">Description</div>
            <p>{spell.desc}</p>
            { spell.higher_level ? <p>{spell.higher_level}</p> : null}
          </section>            
      </section>
      );
    }

    render() {
        return this.state.selected ? this.renderSelected() : this.renderNotSelected();
    }
}

export default Spell;
