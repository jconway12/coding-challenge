import * as ItemUtil from '../util/item_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const getItems = () => dispatch => {
    return ItemUtil.getItems().then(items => dispatch({type: RECEIVE_ITEMS, items}));
}

export const getItem = (id) => dispatch => {
    return ItemUtil.getItem(id).then(item => dispatch({ type: RECEIVE_ITEM, item }));
}

export const createItem = (item) => dispatch => {
    return ItemUtil.createItem(item).then(item => dispatch({ type: RECEIVE_ITEM, item }));
}

export const deleteItem = (id) => dispatch => {
    return ItemUtil.deleteItem(id).then(id => dispatch({ type: REMOVE_ITEM, itemId: id }));
}