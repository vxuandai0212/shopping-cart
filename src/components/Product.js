import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeProductState } from '../selector'

const Product = ({ product }) => (
  <div>
    {product.title} - &#36;{product.price}{product.quantity ? ` x ${product.quantity}` : null}
  </div>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}

const makeMapStateToProps = () => {
  const getProductState = makeProductState()
  const mapStateToProps = (state, props) => {
    return {
        product: getProductState(state, props)
    }
  }
  return mapStateToProps
}

export default connect(makeMapStateToProps)(Product)