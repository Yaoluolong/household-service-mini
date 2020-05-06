import { post } from '../utils/request'

export function update (openid, address) {
  const url = '/wechat/update'
  const data = {
    openid,
    address
  }
  return post(url, data)
}

export function query (openid) {
  const url = '/wechat/query'
  const data = {
    openid
  }
  return post(url, data)
}
