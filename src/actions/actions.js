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
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
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
        payload: { monsters, lists: { 'all': generateInitialList(monsters) }}
    }
}

export function sortMonsters(sortfield) {
    return {
        type: types.SORT_MONSTERS,
        payload: sortfield
    }
}

export function filterMonsters(filter) {
    return {
        type: types.FILTER_MONSTERS,
        payload: filter.toLowerCase()
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
        payload: {spells, lists: {'all': generateInitialList(spells) } }
    }
}

function generateInitialList(items) {
    return Object.keys(items).map(id => id);
}