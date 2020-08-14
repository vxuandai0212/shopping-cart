import { createSelector } from 'reselect'

const productSoldOut = (state, props) => {
    return state.products.byId[props.id].inventory > 0 ? true : false
}

export const makeProductSoldOutState = () => createSelector(
  productSoldOut,
  (status) => status
)

const product = (state, props) => {
    return state.products.byId[props.id]
}

export const makeProductState = () => createSelector(
    product,
    (product) => product
)