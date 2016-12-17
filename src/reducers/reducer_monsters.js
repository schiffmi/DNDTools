import { GET_MONSTERS } from '../actions/types';

const initialState = {
    all: []
}

export default function(state = initialState, action) {

  switch (action.type) {
    case GET_MONSTERS:
      return {...state, all: action.payload };

    default:
      return state;
  }
}