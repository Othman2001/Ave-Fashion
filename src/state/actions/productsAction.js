import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from './actionsTypes';
// fetch porudct async action
export const fetchProducts = () => {
        return (dispatch) => {
            dispatch(fetchProductsRequest())
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    const products = response.data
                    dispatch(fetchProductsSuccess(products))
                })
                .catch(err => {
                    dispatch(fetchProductsFailed(err.message))
                })
        }
    }
    // fetch product request ==> giving the green light to dispatch action to fetch data
export const fetchProductsRequest = () => {
        return {
            type: FETCH_PRODUCTS
        }
    }
    // if products fetching was successfull
export const fetchProductsSuccess = products => {
        return {
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products
        }
    }
    // if prducts failed give me the error
export const fetchProductsFailed = error => {
    return {
        type: FETCH_PRODUCTS_FAILED,
        payload: error
    }
}