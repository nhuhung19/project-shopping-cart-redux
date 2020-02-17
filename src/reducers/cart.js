import * as types from '../constants/ActionsType'
const data = JSON.parse(localStorage.getItem('CART'))
const initialState = data ? data : []

export default function cartReducer(state = initialState, action) {
    let index = -1
    switch (action.type) {
        case types.ADD_TO_CART: {
            index = findProductInCart(state, action.product)
            if (index !== -1) {
                state[index].quantity += action.quantity
            }
            else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        }
        case types.DELETE_CART: {
            index = findProductInCart(state, action.product)
            state.splice(index, 1)
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        }
        case types.UPDATE_CART: {
            index = findProductInCart(state, action.product)
            state[index].quantity = action.quantity
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        }

        default: return [...state]
    }
}

const findProductInCart = (cart, product) => {
    let index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}