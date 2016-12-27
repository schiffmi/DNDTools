import { CHOOSE_MAIN_VIEW } from '../actions/types';


const initialState = {
    views: [1, 2, 3],
    viewsById: { 1: {'id': 1, 'title': 'Monsters', 'name': 'monsters'},
             2: {'id': 2, 'title': 'Spells', 'name': 'spells'},
             3: {'id': 3, 'title': 'References', 'name': 'references'}},
    currentView: 1
}

export default function(state =initialState, action) {

  switch (action.type) {
    case CHOOSE_MAIN_VIEW:
      return {...state, currentView: action.payload };

    default:
      return state;
  }
}