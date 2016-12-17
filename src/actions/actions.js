import * as types from './types.js';
import axios from 'axios';

export function getMonsters() {  
  return dispatch => {
    axios.get('api/monsters')
        .then(response => {
            dispatch(getMonstersAsync(response.data.monsters));        
        })
        .catch(e => dispatch({
                type: types.ERROR,
                payload: e
            })
        );
  }
}

export function getMonstersAsync(monsters) {
    return {
        type: types.GET_MONSTERS,
        payload: monsters
    }
}


export function getSpells() {  
  return dispatch => {
    axios.get('api/spells')
        .then(response => {
            dispatch(getMonstersAsync(response.data.spells));        
        })
        .catch(e => dispatch({
                type: types.ERROR,
                payload: e
            })
        );
  }
}

export function getSpellsAsync(spells) {
    return {
        type: types.GET_MONSTERS,
        payload: spells
    }
}