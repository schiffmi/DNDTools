import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { getSortedSpells } from '../reducers';
import Spells from '../components/spells';

function mapStateToProps(state) {
    return {
        spells: getSortedSpells(state)
    };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortHandler: actions.sortSpells,
    filterHandler: actions.filterSpells
  }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Spells);
