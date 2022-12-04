import { conf } from './conf'
import { serverHost } from './constant'

const KEY_HOST = 'host'
const KEY_TOKEN = 'user_token'
const KEY_USERNAME = 'user_username'

export const config = {
  getHost: () => {
    return conf.get(KEY_HOST) || serverHost
  },
  updateHost: (v: string) => {
    conf.set(KEY_HOST, v)
  },
  clearHost: () => {
    conf.delete(KEY_HOST)
  },

  getToken: () => {
    return conf.get(KEY_TOKEN)
  },
  updateToken: (v: string) => {
    conf.set(KEY_TOKEN, v)
  },
  clearToken: () => {
    conf.delete(KEY_TOKEN)
  },

  getUsername: () => {
    return conf.get(KEY_USERNAME)
  },
  updateUsername: (v: string) => {
    conf.set(KEY_USERNAME, v)
  },
  clearUsername: () => {
    conf.delete(KEY_USERNAME)
  },

}
