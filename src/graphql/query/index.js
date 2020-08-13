export const BUY_PRODUCTS = `
  mutation ($repositoryId: ID!) {
    addStar(input:{starrableId:$repositoryId}) {
      starrable {
        viewerHasStarred
      }
    }
  }
`
export const GET_PRODUCTS = `
  {
    products {
        id,
        title,
        price,
        inventory
    }
  }
`