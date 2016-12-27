import * as types from '../actions/initiative_types';

const INITIAL_STATE = {
    entitiesById: {},
    entities: [],
};


const INITIAL_ENTITY = {
    id: -1,
    name: '',
    locked: false,
    initiative: 0,
    tag: '',
    health: 0,
    notes: ''
};

const entity = (state = INITIAL_ENTITY, action) => {
    switch (action.type) {
        case types.ADD_ENTITY:
        console.log(state);
            return {...state, ...action.payload };
        case types.UPDATE_ENTITY:            
            return {...state, ...action.payload.updates };
        default:
            return state;
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.ADD_ENTITY:
            const newEntity = entity(undefined, action);;
            return { ...state, entitiesById: {...state.entitiesById, [newEntity.id]: newEntity}, entities: [...state.entities, newEntity.id] };
        case types.UPDATE_ENTITY:
            const entityToUpdate= state.entitiesById[action.payload.entityId];
            return {...state, entitiesById: {...state.entitiesById, [entityToUpdate.id]:entity(entityToUpdate, action) } };
        case types.REMOVE_ENTITY:
            const entityId = parseInt(action.payload, 10);
            const newEntitiesById = Object.keys(state.entitiesById).filter(key => parseInt(key, 10) !== entityId)
                                        .reduce((result, current) => {
                                            result[current] = state.entitiesById[current];
                                            return result;
                                        }, {});
            console.log(newEntitiesById);
            return { ...state, entitiesById: newEntitiesById, entities: state.entities.filter(e => parseInt(e, 10) !== entityId) };            
        case types.CLEAR_ENTITIES:
            return {...state, entitiesById: {}, entities: []};
        default:
            return state;
    }
} 

