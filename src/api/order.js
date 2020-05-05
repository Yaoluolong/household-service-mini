import { post } from '../utils/request'

export function query (id) {
  const url = '/order/query'
  return post(url, {id})
}

export function update (id, status) {
  const url = '/order/update'
  const data = {
    id,
    status
  }
  return post(url, data)
}