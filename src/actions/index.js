import { callGraphQL } from '../api'
import { GET_PRODUCTS } from '../graphql/query'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    callGraphQL(GET_PRODUCTS, {}).then(data => {
        console.log(data.data.data)
        dispatch(receiveProducts(data.data.data.products))
    })
}

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()

    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    
    setTimeout(() => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
    }, 1000)
}