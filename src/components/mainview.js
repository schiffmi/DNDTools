import React from 'react';
import InitiativeTracker from '../containers/container_initiative';
import Monsters from '../containers/container_monsters';
import Spells from '../containers/container_spells';
import DiceRoller from './diceroller';
const MainView = (props) => {
    const { currentView } = props;
    let currentViewComponent;
    switch (currentView.name) {
        case 'monsters':
            currentViewComponent = <Monsters />;
            break;
        case 'spells':
            currentViewComponent = <Spells />;
            break;
        case 'references':
            break;
        default:
            break;
    }

    return (                
        <div className="columns col-gapless">
            <div className="content">
                { currentViewComponent }
            </div>
            <div className="sidebar">
                <InitiativeTracker /> 
                <DiceRoller />                   
            </div>
        </div>        
    );
}

export default MainView;