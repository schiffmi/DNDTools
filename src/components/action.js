import React from 'react';

const Actions = ({action}) => {
    return (
        <section className="monster-action">
            <div className="row">
                <div className="col-xs-2">{ action.name }</div>
                <div className="col-xs-2">{ action.damage_dice || ''}</div>
                <div className="col-xs-1">{ action.damage_bonus || ''}</div>
                <div className="col-xs-1">{ action.attack_bonus || ''}</div>
                <div className="col-xs-6">{ action.desc || ''}</div>
            </div>         
        </section>
    );
}

Actions.propTypes = {
    action: React.PropTypes.object
}

export default Actions;
