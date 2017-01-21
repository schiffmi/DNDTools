import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions.js';
import Menu from '../components/menu';

function mapStateToProps({ui}) {
    return { currentView: ui.viewsById[ui.currentView],
             views: ui.views.map(view => ui.viewsById[view]) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    chooseView: actions.chooseMainView,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
