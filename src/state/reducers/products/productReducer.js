import { REMOVE_ITEM, ADD_QUANTITY, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../actions/actionsTypes"

let State = {
    products: [],
}
const ProudctReducer = (state = State, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true

            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,

                error: ''
            }
        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,

                error: action.payload
            }
        default:
            return state;
    }
}
export default ProudctReducer;