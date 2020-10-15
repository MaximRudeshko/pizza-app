const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0
}


const getTotalPrice = arr => arr.reduce((acumulator, obj) => obj.price + acumulator, 0)


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':{

            const currentPizzas = !state.items[action.payload.id] 
             ? [action.payload]
             : [...state.items[action.payload.id].items , action.payload]

            const newItems =  {
                ...state.items,  
                [action.payload.id]: {
                    items: currentPizzas,
                    totalPrice: getTotalPrice( currentPizzas)
                }
            }

            

            const allItems = [].concat.apply([], Object.values(newItems).map(obj => obj.items))
            const totalPrice = getTotalPrice(allItems)


            return {
                ...state,
                items: newItems,
                totalItems: allItems.length,
                totalPrice:totalPrice
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalItems = newItems[action.payload].items.length

            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalItems: state.totalItems - currentTotalItems
            }
        }
           

        case 'PLUS_CART_ITEM':{
            const newItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]

           const itemPrice = state.items[action.payload].items[0].price
           

            return {
                ...state,
                items:{
                    ...state.items,
                    [action.payload]:{
                        items:newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                },
                totalPrice: state.totalPrice + itemPrice,
                totalItems: state.totalItems + 1

            }
        }
            

        case 'MINUS_CART_ITEM':{

            const oldItems = state.items[action.payload].items

            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const itemPrice = state.items[action.payload].items[0].price

            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                },
                totalPrice: state.totalPrice - itemPrice,
                totalItems: state.totalItems - 1
            }
        }
            
        
        
        case 'CLEAR_CARD':
            return state = initialState
    
        default:
            return state
    }
} 

export default cart