import { combineReducers } from "redux"
import cartReducer from "./products/cartReducer"
import ProudctReducer from "./products/productReducer";
const RootReducer = combineReducers({
    cart: cartReducer,
    product: ProudctReducer,
})
export default RootReducer