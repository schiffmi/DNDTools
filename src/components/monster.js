import React, { Component } from 'react';
import Actions from './actions';
import '../styles/monster.css';

class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = { selected : false,
                   spell: null };
  }

  // NAME | HIT DICE (HP) | AC | SPEED | SIZE

  renderNotSelected() {
    const { monster } = this.props;
    return (
      <section onClick={() => this.setState({selected: true})} className="monster-row">
        <div className="row">
          <div className="col-xs-2">
            <span>{monster.name}</span>
          </div>
          <div className="col-xs-2">
            <span>{monster.hit_dice} ({monster.hit_points})</span>
          </div>
          <div className="col-xs-2">
            <span>{monster.armor_class}</span>
          </div>
          <div className="col-xs-2">
            <span>{monster.speed}</span>
          </div>
          <div className="col-xs-2">
            <span>{monster.size}</span>
          </div>
          <div className="col-xs-2">
            <span>{monster.challenge_rating}</span>
          </div>
        </div>
      </section>
    );
  }

  renderSelected() {
    const { monster } = this.props;
    return (
      <section className="monster-row monster-selected">
        <div className="row col-xs-gapless">
          <div className={ this.state.spell !== null ? 'col-xs-9' : 'col-xs-12'}>
              <section className="title statblock-section">
                <div className="row col-xs-gapless">
                  <div className="col-xs-10">
                    <div className="name">{ monster.name }</div>
                    <div className="description">{monster.type}, {monster.alignment}</div>
                  </div>
                  <div className="col-xs-2"><button className="btn btn-default btn-sm" onClick={() => this.setState({selected: false})}>hide</button></div>
                </div>
              </section>
              { /* Important Stats */ }
              <section className="statblock-section" >
                <div className="row col-xs-gapless">
                  <div className="col-xs-6">
                    <div><span className="field-label">Armor Class: </span><span>{monster.armor_class}</span></div>
                    <div><span className="field-label">Hit Points: </span><span>{monster.hit_dice} ({monster.hit_points})</span></div>
                    <div><span className="field-label">Speed: </span><span>{monster.speed}</span></div>
                  </div>
                  <div className="col-xs-3">
                    <div><span className="field-label">Strength: </span><span>{monster.abilities.strength}</span></div>
                    <div><span className="field-label">Constitution: </span><span>{monster.abilities.constitution}</span></div>
                    <div><span className="field-label">Dexterity: </span><span>{monster.abilities.dexterity}</span></div>                  
                  </div>
                  <div className="col-xs-3">
                    <div><span className="field-label">Intelligence: </span><span>{monster.abilities.intelligence}</span></div>
                    <div><span className="field-label">Wisdom: </span><span>{monster.abilities.wisdom}</span></div>
                    <div><span className="field-label">Charisma: </span><span>{monster.abilities.charisma}</span></div>
                  </div>
                </div>
              </section>
              { /* Saves, Checks, Vulnerabilities, Senses, Languages, CR */}
              <section className="statblock-section">
                {this.renderSaves()}
                {this.renderChecks()}
                {monster.damage_vulnerabilities ? (<div><span className="field-label">Damage Vulnerabilities: </span>{monster.damage_vulnerabilities}</div>) : null }
                {monster.damage_resistances ? (<div><span className="field-label">Damage Resistances: </span>{monster.damage_resistances}</div>) : null }
                {monster.damage_immunities ? (<div><span className="field-label">Damage Immunities: </span>{monster.damage_immunities}</div>) : null }
                {monster.condition_immunities ? (<div><span className="field-label">Condition Immunities: </span>{monster.condition_immunities}</div>) : null }
                {monster.senses ? (<div><span className="field-label">Senses: </span>{monster.senses}</div>) : null }
                {monster.languages ? (<div><span className="field-label">Languages: </span>{monster.languages}</div>) : null }
                {monster.challenge_rating ? (<div><span className="field-label">Challenge Rating: </span>{monster.challenge_rating}</div>) : null }
              </section>
              { /* Actions */ }
              <section className="statblock-section">
                <div className="section-title">Actions</div>
                <Actions actions={monster.actions} />
              </section>
              { /* Reactions */ }
              { monster.reactions.length ? (
                <section className="statblock-section">
                  <div className="section-title">Reactions</div>
                  <Actions actions={monster.reactions} />
                </section> ) : null }
              { /* Legendary Actions */ }
              { monster.legendary_actions.length ? (
                <section className="statblock-section">
                  <div className="section-title">Legendary Actions</div>
                  <Actions actions={monster.legendary_actions} />
                </section> ) : null }
              { /* Special Abilities */ }
              { monster.special_abilities.length ? (
                <section className="statblock-section">
                  <div className="section-title">Special Abilities</div>
                  <Actions actions={monster.special_abilities} />
                </section> ) : null }
            </div>
          { /* spells would go here  */}
        </div>
      </section>
    );
  }

  renderChecks() {
    const {monster} = this.props;
    let checkString = Object.keys(monster.checks).reduce( (total, key, ind, arr) => `${total}${key} ${monster.checks[key]}${ind === arr.length - 1 ? '' : ','} `, '');
    return checkString ? (<div><span className="field-label">Checks: </span>{checkString}</div>) : null;
  }

  renderSaves() {
    const {monster} = this.props;
    let saveString = Object.keys(monster.saves).reduce( (total, key, ind, arr) => `${total}${key} ${monster.saves[key]}${ind === arr.length - 1 ? '' : ','} `, '');
    return saveString ? (<div><span className="field-label">Saves: </span>{saveString}</div>) : null;
  }

	render() {      
    return this.state.selected ? this.renderSelected() : this.renderNotSelected();   
  }
}

Monster.propTypes = {
	monster: React.PropTypes.object
};

export default Monster;


/*
  
    "constitution_save": 6,
    "intelligence_save": 8,
    "wisdom_save": 6,
    "history": 12,
    "perception": 10,
  
    "senses": "darkvision 120 ft., passive Perception 20",
    "languages": "Deep Speech, telepathy 120 ft.",
    "challenge_rating": "10",
    "special_abilities": [
      {
        "name": "Amphibious",
        "desc": "The aboleth can breathe air and water.",
        "attack_bonus": 0
      },
      {
        "name": "Mucous Cloud",
        "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
        "attack_bonus": 0
      },
      {
        "name": "Probing Telepathy",
        "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
        "attack_bonus": 0
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The aboleth makes three tentacle attacks.",
        "attack_bonus": 0
      },
      {
        "name": "Tentacle",
        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
        "attack_bonus": 9,
        "damage_dice": "2d6",
        "damage_bonus": 5
      },
      {
        "name": "Tail",
        "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
        "attack_bonus": 9,
        "damage_dice": "3d6",
        "damage_bonus": 5
      },
      {
        "name": "Enslave (3/day)",
        "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
        "attack_bonus": 0
      }
    ],
    "legendary_actions": [
      {
        "name": "Detect",
        "desc": "The aboleth makes a Wisdom (Perception) check.",
        "attack_bonus": 0
      },
      {
        "name": "Tail Swipe",
        "desc": "The aboleth makes one tail attack.",
        "attack_bonus": 0
      },
      {
        "name": "Psychic Drain (Costs 2 Actions)",
        "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
        "attack_bonus": 0
      }
    ]
*/
