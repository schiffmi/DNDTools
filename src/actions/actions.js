import * as types from './types.js';
import { normalize, Schema, arrayOf } from 'normalizr';
import axios from 'axios';

export function initializeAppState() {
    return dispatch => {
        dispatch(getMonsters());
        dispatch(getSpells());
    }
}

function getMonsters() {  
  return dispatch => {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
        const monsters = require('../../data/monsters.min.json');
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
    const normalizedMonsters = normalizeMonsters(monsters);
    return {
        type: types.GET_MONSTERS,
        payload: { monsters: normalizedMonsters.entities.monsters, lists: { 'all': [...normalizedMonsters.result.monsters] }}
    }
}

function normalizeMonsters(monsters) {
    const monster = new Schema('monsters');
    return normalize(monsters, { monsters: arrayOf(monster) });
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

export function sortSpells(sortfield) {
    return {
        type: types.SORT_SPELLS,
        payload: sortfield
    }
}

export function filterSpells(filter) {
    return {
        type: types.FILTER_SPELLS,
        payload: filter.toLowerCase()
    }
}


function getSpells() {  
  return dispatch => {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
        const spells = require('../../data/spells.min.json');
        dispatch(getSpellsAsync(spells));
    }
    else{
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
}

// function getSpellsAsync(spells) {
//     return {
//         type: types.GET_SPELLS,
//         payload: {spells, lists: {'all': generateInitialList(spells) } }
//     }
// }


function getSpellsAsync(spells) {
    const normalizedSpells = normalizeSpells(spells);
    console.log(normalizedSpells);
    return {
        type: types.GET_SPELLS,
        payload: { spells: normalizedSpells.entities.spells, lists: { 'all': [...normalizedSpells.result.spells] }}
    }
}

function normalizeSpells(spells) {
    const spell = new Schema('spells');
    return normalize(spells, { spells: arrayOf(spell) });
}

function generateInitialList(items) {
    return Object.keys(items).map(id => id);
}

export function chooseMainView(view) {
    return {
        type: types.CHOOSE_MAIN_VIEW,
        payload: view
    }
}