import React, { Component } from 'react';

class InitiativeEntity extends Component {
    constructor(props) {
        super(props) 
        this.setInitiative = this.setInitiative.bind(this);
        this.setName = this.setName.bind(this);
        this.setTag = this.setTag.bind(this);
    }

    setInitiative(e) {
        const { setInitiativeHandler } = this.props;
        setInitiativeHandler(e.target.value);

    }

    setName(e) {
        const { setNameHandler } = this.props;
        setNameHandler(e.target.value);
    }

    setTag(e) {
        const { setTagHandler } = this.props;
        setTagHandler(e.target.value);
    }

    render() {
        const { entity, removeEntityHandler } = this.props;
        return (        
            <div className="initiativeEntity">
                <div className="main">
                    <div className="item activate">&#x25b6;</div>
                    <div className="item initiativeCount">
                        <input className="form-input" 
                            value={entity.initiative }
                            onChange={this.setInitiative}
                            type="number"
                            min="-40" max="40" />
                    </div>
                    <div className="item entityName">
                        <input className="form-input" 
                            value={entity.name }
                            onChange={this.setName}
                            type="text" />
                    </div>
                    <div className="item tag">
                        <input className="form-input" 
                            value={entity.tag }
                            onChange={this.setTag}
                            type="text"
                            maxLength="2"/>
                    </div>
                    <div className="item initiativeOptions">&#8942;</div>
                    <div className="item initiativeLock">&#128274;</div>
                    <div className="item initiativeRemove"
                        onClick={removeEntityHandler}>X</div>


                </div>
                { /*<div className="details"></div> */}
            </div>
        );
    }
}

export default InitiativeEntity;