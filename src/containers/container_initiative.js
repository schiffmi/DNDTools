import { connect } from 'react-redux';
import InitiativeTracker from '../components/initiative';

export default connect(state => ({'init': []}), null)(InitiativeTracker);