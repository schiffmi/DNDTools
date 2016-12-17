import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMonsters } from '../actions/actions.js';

import Monsters from '../components/monsters';

class MonstersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {filter: ''};
    }

    componentWillMount() {
        const { monsters, getMonsters } = this.props;
        if (!monsters.length) {
            getMonsters();
        }
    }

    render() {
        const monsters = this.props.monsters;
        const filteredMonsters = [...monsters];
        return (
            <Monsters monsters={filteredMonsters} />
        );
    }
}

Monsters.propTypes = {
    monsters: React.PropTypes.array
};

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    getMonsters
  }, dispatch);
}

export default connect( (state) => ({monsters: state.monsters.all}), mapDispatchToProps)(MonstersContainer);
