import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions.js';
import MainView from '../components/mainview';

function mapStateToProps({ui}) {
    return { currentView: ui.viewsById[ui.currentView], };
}

export default connect(mapStateToProps, null)(MainView);