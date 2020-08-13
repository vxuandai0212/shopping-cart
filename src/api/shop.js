import request from '../utils/request'

export function getProducts() {
  return request.post('', {
    query: GET_PRODUCTS
  })
}

export function buyProducts() {
  return request.post('', {
    query: BUY_PRODUCTS,
    variables: { repositoryId },
  })
}
