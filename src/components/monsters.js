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
			<section>
				<section className="tablehead">
					<div className="columns col-gapless">
						<div className="column col-md-2">
							<span onClick="">Name</span>
						</div>
						<div className="column col-md-2">
							<span onClick="">HP</span>
						</div>					
						<div className="column col-md-2">
							<span onClick="">AC</span>
						</div>
						<div className="column col-md-2">
							<span onClick="">Speed</span>
						</div>
						<div className="column col-md-2">
							<span onClick="">Size</span>
						</div>
						<div className="column col-md-2">
							<span onClick="">Challenge</span>
						</div>
					</div>
				</section>
				{ monsters.map( monster =>  ( <Monster key={monster.name} monster={monster} /> )) }
			</section>
		);
	}
}

Monsters.propTypes = {
	monsters: React.PropTypes.array
};

export default Monsters;
