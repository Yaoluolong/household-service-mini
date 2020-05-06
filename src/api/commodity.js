import { get, post } from '../utils/request'

export function classList () {
  const url = '/class/list'
  return get(url)
}

export function queryCommodity () {
  const url = '/wechat/update'
  return post(url)
}
export function sortCommodity (className) {
  const url = '/commodity/sort'
  return post(url, {className})
}
