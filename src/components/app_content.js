import React from 'react';
import InitiativeTracker from '../containers/container_initiative';
import Monsters from '../containers/container_monsters.js';

const AppContent = () => {
    return (
        <div className="container">
            <div className="columns col-gapless">
                <div className="column col-9">
                    <Monsters />
                </div>
                <div className="column col-3">
                    <InitiativeTracker />                    
                </div>
            </div>
        </div>
    );
}
         
export default AppContent;