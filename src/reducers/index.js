import { combineReducers } from 'redux';
import SpellsReducer from './reducer_spells';
import MonstersReducer from './reducer_monsters';
import * as fromMonsters from './reducer_monsters';

const rootReducer = combineReducers({
  spells: SpellsReducer,
  monsters: MonstersReducer
});

export default rootReducer;

export const getSortedMonsters = (state) => {
    return fromMonsters.getSortedMonsters(state.monsters);
}