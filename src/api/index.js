import request from '../utils/request'

export function callGraphQL(query, variables) {
    return request.post('', {
        query,
        variables,
    })
}