const initialState = {
    pizzas: [],
    isLoading: true
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return{
                ...state,
                pizzas: action.payload,
                isLoading:false
            }  
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:action.payload
            }  
        default:
            return state
    }
}

export default pizzas