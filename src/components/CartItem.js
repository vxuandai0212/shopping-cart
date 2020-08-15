import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({title, price, quantity}) => (
   <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

CartItem.propTypes = {
   title: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   quantity: PropTypes.number.isRequired
}

export default CartItem