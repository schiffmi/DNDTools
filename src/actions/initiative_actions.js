import * as types from './initiative_types.js';

export const addPlayer = () => {
    const entity = {
        locked: true,
        id: new Date().getTime()
    }
    return addEntity(entity);
};

export const addCreature = (creatureId) => {
    const entity = {
        locked: false,
        id: new Date().getTime(),
        monster: creatureId
    }

    return addEntity(entity);
}

export const updateInitiative = (entityId, initiative) => {
    const updates = { initiative };
    return updateEntity(entityId, updates);
}

export const updateName = (entityId, name) => {
    const updates = { name };
    return updateEntity(entityId, updates);
}

export const updateTag = (entityId, tag) => {
    const updates = { tag };
    return updateEntity(entityId, updates);
}

export const removeEntity = (entityId) => {
    return {
        type: types.REMOVE_ENTITY,
        payload: entityId
    }
}

function updateEntity(entityId, updates) {
    return {
        type: types.UPDATE_ENTITY,
        payload: { entityId, updates }        
    }
}

export const clearEntities = () => {
    return { type: types.CLEAR_ENTITIES, };
}

function addEntity(entity) {
    return {
        type: types.ADD_ENTITY,
        payload: entity
    }
}


