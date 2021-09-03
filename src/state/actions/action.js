// all cart actions
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from './actionsTypes';


export const addToCart = (item) => {
        return {
            type: ADD_TO_CART,
            item
        }
    }
    //remove item action
export const removeItem = (id) => {
        return {
            type: REMOVE_ITEM,
            id
        }
    }
    //subtract qt action
export const subtractQuantity = (id) => {
        return {
            type: SUB_QUANTITY,
            id
        }
    }
    //add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const addLookBook = (item) => {
    return {
        type: 'ADD_LOOK_BOOK',
        item
    }

}