import { post } from '../utils/request'

export function create (id, openid, score, evaluate) {
  const url = '/evaluate/create'
  const data = {
    id,
    openid,
    score,
    evaluate
  }
  return post(url, data)
}
