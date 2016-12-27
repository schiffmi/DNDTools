import { combineReducers } from 'redux';
import SpellsReducer from './reducer_spells';
import MonstersReducer from './reducer_monsters';
import UIReducer from './reducer_ui';
import InitiativeReducer from './reducer_initiative';
import * as fromMonsters from './reducer_monsters';
import * as fromSpells from './reducer_spells';

const rootReducer = combineReducers({
  spells: SpellsReducer,
  monsters: MonstersReducer,
  ui: UIReducer,
  initiative: InitiativeReducer
});

export default rootReducer;

export const getSortedMonsters = (state) => {
    return fromMonsters.getSortedMonsters(state.monsters);
}

export const getSortedSpells = (state) => {
    return fromSpells.getSortedSpells(state.spells);
}
