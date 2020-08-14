import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeProductSoldOutState } from '../selector'
import { addToCart } from '../actions'

const Button = ({ isAvailable, addToCartClicked }) => (
    <button
        onClick={addToCartClicked}
        disabled={isAvailable ? '' : 'disabled'}>
        {isAvailable ? 'Add to cart' : 'Sold Out'}
    </button>
)

const makeMapStateToProps = () => {
    const getStockStatus = makeProductSoldOutState()
    const mapStateToProps = (state, props) => {
        return {
            isAvailable: getStockStatus(state, props)
        }
    }
    return mapStateToProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addToCartClicked: () => dispatch(addToCart(ownProps.id))
    }
}

Button.propTypes = {
    id: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    addToCartClicked: PropTypes.func.isRequired
}

export default connect(makeMapStateToProps, mapDispatchToProps)(Button)