import * as SeasonTagUtil from '../util/season_tag_util';
export const RECEIVE_SEASON_TAGS = 'RECEIVE_SEASON_TAGS';

export const getSeasonTags = () => dispatch => {
    return SeasonTagUtil.getSeasonTags().then(season_tags => dispatch({ type: RECEIVE_SEASON_TAGS, season_tags }));
}