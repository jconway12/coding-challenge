import {RECEIVE_ITEMS, RECEIVE_ITEM, REMOVE_ITEM} from '../actions/item_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ITEMS: {
            return Object.assign({}, action.items);
        }
        case RECEIVE_ITEM: {
            return Object.assign({}, state, { [action.item.id]: action.item });
        }
        case REMOVE_ITEM: {
            const newState = Object.assign({}, state);
            delete newState[action.itemId];
            return newState;
        }
        default: 
         return state;
    }
}

export default itemsReducer;