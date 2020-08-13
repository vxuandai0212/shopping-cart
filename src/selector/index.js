import { createSelector } from 'reselect'

const productSoldOut = (state, props) => {
    const product = state.products.find( p => p.id === props.id )
    return product.inventory > 0 ? false : true
}

export const makeProductSoldOutState = () => createSelector(
  productSoldOut,
  (status) => ({ status })
)

const product = (state, props) => {
    return state.products.find( p => p.id === props.id )
}

export const makeProductState = () => createSelector(
    product,
    (product) => ({ product })
)