import { combineReducers } from 'redux'
import productReducer from './product'
import cartReducer from './cart'
import messageReducer from './message.js'

const appReducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    message: messageReducer
})

export default appReducers