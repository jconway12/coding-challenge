export const getItems = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/items'
    })
}

export const getItem = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/items/${id}`
    })
}

export const createItem = (item) => {
    return $.ajax({
        method: 'POST',
        url: 'api/items',
        data: {item}
    })
}

export const deleteItem = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/items/${id}`,
    })
}