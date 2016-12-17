import React, { Component } from 'react';

class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = { selected : false };
  }

  renderNotSelected() {
    const { monster } = this.props;
    return (
      <section className="monster-row">
        <div className="columns">
          <div className="column col-md-2">
            <span>{monster.name}</span>
          </div>
          <div className="column col-md-2">
            <span className="bold">SIZE: </span><span>{monster.size}</span>
          </div>
          <div className="column col-md-2">
            <span className="bold">AC: </span><span>{monster.armor_class}</span>
          </div>
          <div className="column col-md-2">
            <span className="bold">HP: </span><span>{monster.hit_points}</span>
          </div>
          <div className="column col-md-2">
            <span className="bold">SPEED: </span><span>{monster.speed}</span>
          </div>
          <div className="column col-md-2">
            <span className="bold">PASS PER:</span><span>{monster.perception + 10}</span>
          </div>
        </div>
        <div className="columns">
          <div className="column col-md-2">
            <div className="bold centered">STR</div><div className="centered">{monster.strength}</div>
          </div>
          <div className="column col-md-2">
            <div className="bold centered">DEX</div><div className="centered">{monster.dexterity}</div>
          </div>
          <div className="column col-md-2">
            <div className="bold centered">CON</div><div className="centered">{monster.constitution}</div>
          </div>
          <div className="column col-md-2">
            <div className="bold centered">INT</div><div className="centered">{monster.intelligence}</div>
          </div>
          <div className="column col-md-2">
            <div className="bold centered">WIS</div><div className="centered">{monster.wisdom}</div>
          </div>
          <div className="column col-md-2">
            <div className="bold centered">CHA</div><div className="centered">{monster.charisma}</div>
          </div>
        </div>
      </section>
    );
  }

	render() {
		return this.renderNotSelected();
	}
}

Monster.propTypes = {
	monster: React.PropTypes.object
};

export default Monster;


/*
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "subtype": "",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 135,
    "hit_dice": "18d10",
    "speed": "10 ft., swim 40 ft.",
    "strength": 21,
    "dexterity": 9,
    "constitution": 15,
    "intelligence": 18,
    "wisdom": 15,
    "charisma": 18,
    "constitution_save": 6,
    "intelligence_save": 8,
    "wisdom_save": 6,
    "history": 12,
    "perception": 10,
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
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
