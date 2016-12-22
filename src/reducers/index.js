import { combineReducers } from 'redux';
import SpellsReducer from './reducer_spells';
import MonstersReducer from './reducer_monsters';
import UIReducer from './reducer_ui';
import * as fromMonsters from './reducer_monsters';
import * as fromSpells from './reducer_spells';

const rootReducer = combineReducers({
  spells: SpellsReducer,
  monsters: MonstersReducer,
  ui: UIReducer,
});

export default rootReducer;

export const getSortedMonsters = (state) => {
    return fromMonsters.getSortedMonsters(state.monsters);
}

export const getSortedSpells = (state) => {
    return fromSpells.getSortedSpells(state.spells);
}
