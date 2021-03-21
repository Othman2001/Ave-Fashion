import {combineReducers } from "redux"
import  cartReducer  from "./products/productReducer"

const RootReducer  = combineReducers({
    cart: cartReducer
})
export default RootReducer