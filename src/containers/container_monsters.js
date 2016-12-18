import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *as actions from '../actions/actions.js';
import { getSortedMonsters } from '../reducers';
import Monsters from '../components/monsters';

function mapStateToProps(state) {
    return {
        monsters: getSortedMonsters(state)
    };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortHandler: actions.sortMonsters
  }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Monsters);
