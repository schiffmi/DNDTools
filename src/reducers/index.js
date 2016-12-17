import { combineReducers } from 'redux';
import SpellsReducer from './reducer_spells';
import MonstersReducer from './reducer_monsters';

const rootReducer = combineReducers({
  spells: SpellsReducer,
  monsters: MonstersReducer
});

export default rootReducer;
