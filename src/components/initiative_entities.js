import React from 'react';
import InitiativeEntity from '../containers/container_initiative_entity';

const InitiativeEntities = ({entities}) => {
    const entitiesUI = entities.map(entity => <InitiativeEntity key={entity.id} entity={entity} />);
    return ( 
        <div className="initiativeEntities">
            { entitiesUI }
        </div> 
    );
}

export default InitiativeEntities;

