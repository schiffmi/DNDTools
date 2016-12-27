import { connect } from 'react-redux';
import InitiativeEntity from '../components/initiative_entity';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../actions/initiative_actions';

const mapDispatchToProps = (dispatch, {entity}) => {
    return bindActionCreators({
         setInitiativeHandler: (initiative) => initiativeActions.updateInitiative(entity.id, initiative),
         setNameHandler: (name) => initiativeActions.updateName(entity.id, name),
         setTagHandler: (tag) => initiativeActions.updateName(entity.id, tag),
         removeEntityHandler: () => initiativeActions.removeEntity(entity.id)
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(InitiativeEntity);
