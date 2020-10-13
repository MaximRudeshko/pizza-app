export const setSortBy = ({type, order,name}) => {
    return {
        type: 'SET_SORT_BY',
        payload: {
            name,
            type,
            order
        }
    }
}

export const setCategory = (categoryName) => {
    return {
        type: 'SET_CATEGORY',
        payload: categoryName
    }
}