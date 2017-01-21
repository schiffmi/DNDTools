import React, { Component } from 'react';
import Monster from './monster';

class Monsters extends Component {
    render() {
        const { monsters, sortHandler, filter, filterHandler } = this.props;
        return (
            <section>
                <nav className="componentheader navbar navbar-fixed-top navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">Monsters</span>
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
                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('name') }>Name</span>
                            </div>
                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('hit_points')}>HP</span>
                            </div>
                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('armor_class')}>AC</span>
                            </div>
                            <div className="col-xs-2">
                                <span>Speed</span>
                            </div>
                            <div className="col-xs-2">
                                <span>Size</span>
                            </div>
                            <div className="col-xs-2">
                                <span onClick={() => sortHandler('challenge_rating')}>Challenge</span>
                            </div>
                        </div>
                    </section>
                    { monsters.map( monster =>  ( <Monster key={monster.id} monster={monster} /> )) }
                </section>
            </section>
        );
    }
}

Monsters.propTypes = {
    monsters: React.PropTypes.array,
    filter: React.PropTypes.string,
    sortHandler: React.PropTypes.func,
    filterHandler: React.PropTypes.func
};

export default Monsters;
