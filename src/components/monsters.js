import React, { Component } from 'react';
import Monster from './monster';

class Monsters extends Component {
	constructor(props) {
		super(props);
		this.state = {filter: ''};
	}

	render() {
		const monsters = this.props.monsters;
		return (
			<div className="container">
				{ monsters.map( monster =>  ( <Monster key={monster.name} monster={monster} /> )) }
			</div>
		);
	}
}

Monsters.propTypes = {
	monsters: React.PropTypes.array
};

export default Monsters;
