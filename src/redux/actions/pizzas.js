import FakeApi from '../../services/fakeApi'

const {getPizzas} = new FakeApi()

const fetchPizzas = (activeCategory, activeSortType) => (dispatch) => {
    dispatch(setLoading(true))
    getPizzas(`http://localhost:3004/pizzas/?${activeCategory !== null ? `category=${activeCategory}` : ''}&_sort=${activeSortType.type}&_order=${activeSortType.order}`)
        .then(data => dispatch(setPizzas(data)))
}



const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items
    }
}

const setLoading = val => {
    return {
        type: 'SET_LOADING',
        payload: val
    }
}

export {
    setPizzas,
    fetchPizzas
}