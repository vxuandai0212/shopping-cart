import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>
        <h1>Start product item</h1>
        {children}
        <h1>End product item</h1>
    </div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
