import { REMOVE_ITEM, ADD_QUANTITY } from "../../actions/actionsTypes"
let State = {
        products: [],
        basket: [],
        total: 0,
        loading: false,
        menProducts: [],
    }
    //handle all cart and checkout data
const cartReducer = (state = State, action) => {
    switch (action.type) {
        //adding cart logi
        //adding cart logic
        case 'ADD_TO_CART':
            const existingItem = state.basket.find((f) => f.id === action.item.id);
            if (existingItem) {
                existingItem.qty += 1
                return {
                    ...state,
                    total: state.total + existingItem.price
                }
            } else {
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                    total: state.total + action.item.price
                }
            }
            //remove item from cart logic
        case REMOVE_ITEM:
            let itemRemove = state.basket.find(item => action.id === item.id)
            let new_items = state.basket.filter(item => action.id !== item.id)
            let newTotal = state.total - (itemRemove.prcie * itemRemove.qty)
            return {
                ...state,
                basket: new_items,
                total: newTotal
            }
            //    add qty logic
        case ADD_QUANTITY:
            let added = state.basket.find(item => item.id === action.id)
            added.qty += 1
            let newTotal2 = state.total + added.price
            return {
                ...state,
                total: newTotal2
            }

        default:
            return state;
    }
}

export default cartReducer