import React from 'react';

const Actions = ({action}) => {
    return (
        <section className="monster-action">     
            <div className="columns col-gapless">
                <div className="column col-2">{ action.name }</div>
                <div className="column col-2">{ action.damage_dice || ''}</div>
                <div className="column col-1">{ action.damage_bonus || ''}</div>
                <div className="column col-1">{ action.attack_bonus || ''}</div>
                <div className="column col-6">{ action.desc || ''}</div>
            </div>         
        </section>
    );
}

Actions.propTypes = {
    action: React.PropTypes.object
}

export default Actions;
