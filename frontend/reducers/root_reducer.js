import {combineReducers} from 'redux';
import itemsReducer from './items_reducer';
import seasonsReducer from './seasons_reducer';
import seasonTagsReducer from './season_tags_reducer';

export default combineReducers({
    items: itemsReducer,
    seasons: seasonsReducer,
    seasonTags: seasonTagsReducer
})