export const addItemToCart = (pizzaObj) => {
    return{
        type: 'ADD_ITEM_TO_CART',
        payload: pizzaObj
    }
}

