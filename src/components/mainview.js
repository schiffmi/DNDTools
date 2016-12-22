import React from 'react';
import InitiativeTracker from '../containers/container_initiative';
import Monsters from '../containers/container_monsters';
import Spells from '../containers/container_spells';

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
            <div className="column col-9">
                { currentViewComponent }
            </div>
            <div className="column col-3">
                <InitiativeTracker />                    
            </div>
        </div>        
    );
}

export default MainView;