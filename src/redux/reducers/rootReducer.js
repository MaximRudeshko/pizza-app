import {combineReducers} from 'redux'
import fillters from './fillters';
import pizzas from './pizzas'

const rootReducer = combineReducers({
    fillters,
    pizzas
})


export default rootReducer