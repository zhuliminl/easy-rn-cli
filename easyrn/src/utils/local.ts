import { config } from './conf'

const KEY_TOKEN = 'user_token'
const KEY_USERNAME = 'user_username'

export const getToken = () => {
  return config.get(KEY_TOKEN)
}

export const updateToken = (v: string) => {
  console.log('-----------updateToken', v)
  config.set(KEY_TOKEN, v)
}

export const clearToken = () => {
  return config.delete(KEY_TOKEN)
}

export const getUsername = () => {
  return config.get(KEY_USERNAME)
}

export const updateUsername = (v: string) => {
  console.log('-------------updateUsername', v)
  config.set(KEY_USERNAME, v)
}

export const clearUsername = () => {
  return config.delete(KEY_USERNAME)
}

export const clear = () => {
  clearToken()
  clearUsername()
}