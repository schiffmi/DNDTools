import React, { Component } from 'react';
import Monster from './monster';

class Monsters extends Component {
	constructor(props) {
		super(props);
		this.state = {filter: ''};
	}

	render() {
		const { monsters, sortHandler } = this.props;
		return (
			<section>
				<section className="tablehead">
					<div className="columns col-gapless">
						<div className="column col-md-2">
							<span onClick={() => sortHandler('name') }>Name</span>
						</div>
						<div className="column col-md-2">
							<span onClick={() => sortHandler('hit_points')}>HP</span>
						</div>					
						<div className="column col-md-2">
							<span onClick={() => sortHandler('armor_class')}>AC</span>
						</div>
						<div className="column col-md-2">
							<span>Speed</span>
						</div>
						<div className="column col-md-2">
							<span>Size</span>
						</div>
						<div className="column col-md-2">
							<span onClick={() => sortHandler('challenge_rating')}>Challenge</span>
						</div>
					</div>
				</section>
				{ monsters.map( monster =>  ( <Monster key={monster.id} monster={monster} /> )) }
			</section>
		);
	}
}

Monsters.propTypes = {
	monsters: React.PropTypes.array,
	sortMonsters: React.PropTypes.func
};

export default Monsters;
