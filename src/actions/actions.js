import * as types from './types.js';
import axios from 'axios';

export function initializeAppState() {
    return dispatch => {
        dispatch(getMonsters());
        //dispatch(getSpells());
    }
}

function getMonsters() {  
  return dispatch => {
    if (process.env.NODE_ENV === 'development') {
        const monsters = require('../../data/monsters.min.json')["monsters"];
        dispatch(getMonstersAsync(monsters));
    }
    else {
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
}

function getMonstersAsync(monsters) {
    return {
        type: types.GET_MONSTERS,
        payload: monsters
    }
}


function getSpells() {  
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

function getSpellsAsync(spells) {
    return {
        type: types.GET_MONSTERS,
        payload: spells
    }
}