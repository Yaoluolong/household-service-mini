import { post } from '../utils/request'

export function create (id, openid, score, evaluate) {
  const url = '/evaluate/create'
  const data = {
    id,
    openid,
    score,
    evaluate
  }
  console.log(data)
  return post(url, data)
}
