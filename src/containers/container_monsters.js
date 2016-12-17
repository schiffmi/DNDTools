import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMonsters } from '../actions/actions.js';

import Monsters from '../components/monsters';

Monsters.propTypes = {
    monsters: React.PropTypes.array
};

function mapStateToProps(state) {
    return {
        monsters: state.monsters.all
    };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMonsters
  }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Monsters);
