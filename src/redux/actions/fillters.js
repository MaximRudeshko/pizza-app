export const setSortBy = (sortBy) => {
    return {
        type: 'SET_SORT_BY',
        payload: sortBy
    }
}

export const setCategory = (categoryName) => {
    return {
        type: 'SET_CATEGORY',
        payload: categoryName
    }
}