import React from 'react';
import '../styles/initiative.css';
import InitiativeMenu from './initiative_menu';
import InitiativeEntities from './initiative_entities';

const InitiativeTracker = (props) => {
    return (
        <div className="initiative">
            <InitiativeMenu addPlayerHandler={props.addPlayerHandler}
                            addCreatureHandler={props.addCreatureHandler}
                            clearEntitiesHandler={props.clearEntitiesHandler} />
            <InitiativeEntities entities={props.entities}/>
        </div>
    );
}

export default InitiativeTracker;