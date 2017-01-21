import React, { Component } from 'react';
import Spell from './spell';

class Spells extends Component {
    render() {
        const { spells, sortHandler, filter, filterHandler } = this.props;
        return (
            <section>
                <nav className="componentheader navbar navbar-fixed-top navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">Spells</span>
                    </div>
                    <div className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input value={filter} onChange={e => filterHandler(e.target.value)} className="form-control" type="text" id="filter" placeholder="Search..." />
                        </div>
                    </div>
                  </div>
                </nav>
                <section>
                    <section className="tablehead">
                        <div className="row">
                            <div className="col-xs-3">
                                <span onClick={() => sortHandler('name') }>Name</span>
                            </div>
                            <div className="col-xs-1">
                                <span onClick={() => sortHandler('level')}>Level</span>
                            </div>
                            <div className="col-xs-3">
                                <span>Class</span>
                            </div>

                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('school')}>School</span>
                            </div>
                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('duration')}>Duration</span>
                            </div>

                            <div className="col-xs-1">
                                <span onClick={() => sortHandler('casting_time')}>Casting Time</span>
                            </div>
                        </div>
                    </section>
                    { spells.map( spell =>  ( <Spell key={spell.id} spell={spell} /> )) }
                </section>
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
