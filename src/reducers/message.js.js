// import * as types from '../constants/ActionsType'
import * as messages from '../constants/Message'
const initialState = messages.MGS_WELCOME

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case messages.MSG_ADD_TO_CART_SUCCESS: {
            state = messages.MSG_ADD_TO_CART_SUCCESS
            return state
        }
        case messages.MSG_DELETE_CART_SUCCESS: {
            state = messages.MSG_DELETE_CART_SUCCESS
            return state
        }
        case messages.MSG_UPDATE_CART_SUCCESS: {
            state = messages.MSG_UPDATE_CART_SUCCESS
            return state
        }

        default: return state
    }
}

