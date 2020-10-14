import {combineReducers} from 'redux'
import fillters from './fillters';
import pizzas from './pizzas'
import cart from './cart'

const rootReducer = combineReducers({
    fillters,
    pizzas,
    cart
})


export default rootReducer