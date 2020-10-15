export const addItemToCart = (pizzaObj) => {
    return{
        type: 'ADD_ITEM_TO_CART',
        payload: pizzaObj
    }
}

export const removeCartItem = (id) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: id
    }
}

export const minusCartItem = (id) => {
    return {
        type:'MINUS_CART_ITEM',
        payload: id
    }
}

export const plusCartItem = (id) => {
    return {
        type: 'PLUS_CART_ITEM',
        payload: id
    }
}


export const clearCart = () => {
    return {
        type: 'CLEAR_CARD'
    }
}

