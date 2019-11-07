export const getSeasons = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/seasons'
    })
}