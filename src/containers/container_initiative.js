import { connect } from 'react-redux';
import InitiativeTracker from '../components/initiative';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../actions/initiative_actions';

const getEntities = (initiative) => {
    console.log(initiative);
    return initiative.entities.map(entityId => initiative.entitiesById[entityId]);
}

const mapStateToProps = ({initiative}) => {
    return {
        entities: getEntities(initiative),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPlayerHandler: initiativeActions.addPlayer,
        addCreatureHandler: creatureId => initiativeActions.addCreature(creatureId),
        clearEntitiesHandler: initiativeActions.clearEntities
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(InitiativeTracker);