import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Button from './Button'

const ProductItem = ({ id }) => (
  <div style={{ marginBottom: 20 }}>
    <Product id={id} />
    <Button id={id} />
  </div>
)

ProductItem.propTypes = {
  id: PropTypes.number.isRequired
}

export default ProductItem