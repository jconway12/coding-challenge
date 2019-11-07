import { RECEIVE_SEASON_TAGS } from '../actions/season_tag_actions';

const seasonTagsReducer = (state = {}, action) => {
    Object.freeze(state);
    if (action.type === RECEIVE_SEASON_TAGS) {
        return action.season_tags;
    } else {
        return state;
    }
}

export default seasonTagsReducer;