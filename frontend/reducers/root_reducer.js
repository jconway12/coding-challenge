import {combineReducers} from 'redux';
import itemsReducer from './items_reducer';

export default combineReducers({
    items: itemsReducer
})