export const getSeasonTags = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/season_tags'
    })
}