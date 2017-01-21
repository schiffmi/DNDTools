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
        <div className="row">
            { /* Main Content */ }
            <div className="col-md-9 content main">
                { currentViewComponent }
            </div>
            { /* Fixed Sidebar for diceroller and Challenge Calculator */ }
            <div className="col-md-3 col-md-offset-9 sidebar">
                <InitiativeTracker />
                <DiceRoller />
            </div>
        </div>
    );
};

export default MainView;
