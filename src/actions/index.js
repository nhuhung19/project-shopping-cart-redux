import * as types from '../constants/ActionsType'
import * as messages from '../constants/Message'
export function addToCart(product, quantity) {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export function messBuyProduct(message) {
    return {
        type: messages.MSG_ADD_TO_CART_SUCCESS,
        message
    }
}

export function deleteCart(product) {
    return {
        type: types.DELETE_CART,
        product
    }
}

export function messageDelete(message) {
    return {
        type: messages.MSG_DELETE_CART_SUCCESS,
        message
    }
}

export function messageUpdate(message) {
    return {
        type: messages.MSG_UPDATE_CART_SUCCESS,
        message
    }
}

export function updateCart(product, quantity) {
    return {
        type: types.UPDATE_CART,
        product,
        quantity
    }
}