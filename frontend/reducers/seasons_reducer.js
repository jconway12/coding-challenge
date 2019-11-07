import {RECEIVE_SEASONS} from '../actions/season_actions';

const seasonsReducer = (state = {}, action) => {
    Object.freeze(state);
    if (action.type === RECEIVE_SEASONS) {
        return action.seasons;
    } else {
        return state;
    }
}

export default seasonsReducer;