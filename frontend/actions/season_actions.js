import * as SeasonUtil from '../util/season_util';
export const RECEIVE_SEASONS = 'RECEIVE_SEASONS';

export const getSeasons = () => dispatch => {
    return SeasonUtil.getSeasons().then(seasons => dispatch({type: RECEIVE_SEASONS, seasons}));
}