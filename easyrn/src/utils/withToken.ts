import { getToken } from './local'

export const withToken = (callback: (token: string) => void) => {
  const token = getToken()
  if (token) {
    callback(token)
  } else {
    console.error('noTokenFound')
  }
}