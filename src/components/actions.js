import React from 'react';
import Action from './action';

const Actions = ({actions}) => {
    return (
        <section className="monster-actions">
            <section className="tablehead">
                <div className="columns col-gapless">
                    <div className="column col-2">Name</div>
                    <div className="column col-2">Damage Dice</div>
                    <div className="column col-1">Damage Bonus</div>
                    <div className="column col-1">Attack Bonus</div>
                    <div className="column col-6">Description</div>
                </div>
            </section>
            { actions.map(action => <Action key={action.name} action={action} />) }
        </section>
    );
}

Actions.propTypes = {
    actions: React.PropTypes.array
}

export default Actions;
