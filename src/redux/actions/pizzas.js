import FakeApi from '../../services/fakeApi'

const {getPizzas} = new FakeApi()

const fetchPizzas = () => (dispatch) => {
    dispatch(setLoading(true))
    getPizzas('http://localhost:3000/db.json').then(data => dispatch(setPizzas(data.pizzas)))
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