import React, { Component } from 'react';
import Spell from './spell';

class Spells extends Component {
    render() {
        const { spells, sortHandler, filter, filterHandler } = this.props;
        return (
            <section>
                <div className="form-group">                    
                    <input value={filter} onChange={e => filterHandler(e.target.value)} className="form-input" type="text" id="filter" placeholder="Search..." />                   
                </div>
                <section className="tablehead">
                    <div className="columns col-gapless">
                        <div className="column col-md-2">
                            <span onClick={() => sortHandler('name') }>Name</span>
                        </div>
                        <div className="column col-md-2">
                            <span onClick={() => sortHandler('level')}>Level</span>
                        </div>                  
                        <div className="column col-md-2">
                            <span onClick={() => sortHandler('school')}>School</span>
                        </div>                  

                        <div className="column col-md-2">
                            <span onClick={() => sortHandler('duration')}>Duration</span>
                        </div>
                        <div className="column col-md-2">
                            <span onClick={() => sortHandler('casting_time')}>Casting Time</span>
                        </div>
                    </div>                        
                </section>
                { spells.map( spell =>  ( <Spell key={spell.id} spell={spell} /> )) }
            </section>
        );
    }
}

Spells.propTypes = {
    spells: React.PropTypes.array,
    filter: React.PropTypes.string,
    sortHandler: React.PropTypes.func,
    filterHandler: React.PropTypes.func
};

export default Spells;
