const initialState = {
    sortBy: {
        type: 'rating',
        order: 'asc'
    },
    category: null
}

const fillterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state, 
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state, 
                category: action.payload
            }
        default:
            return state
    }
}

export default fillterReducer