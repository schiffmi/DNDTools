import React from 'react';

const InitiativeMenu = (props) => {
    const {addPlayerHandler, addCreatureHandler, clearEntitiesHandler} = props;

    return ( 
        <div className="initiativeMenu">
            <div className="item">Sort</div>
            <div className="item">Previous</div>
            <div className="item">Next</div>
            <div className="item" onClick={addCreatureHandler}>Add Creature</div>
            <div className="item" onClick={addPlayerHandler}>Add PC</div>
            <div className="item" onClick={clearEntitiesHandler}><div className="submenu">...</div></div>
        </div>
    );
};

export default InitiativeMenu;