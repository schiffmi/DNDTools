import { GET_SPELLS } from '../actions/types';

const initialState = {
    all: []
}

export default function(state =initialState, action) {

  switch (action.type) {
    case GET_SPELLS:
      return {...state, all: action.payload };

    default:
      return state;
  }
}