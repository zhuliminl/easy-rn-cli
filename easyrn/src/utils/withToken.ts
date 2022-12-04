import { config } from './local'
const chalk = require('chalk')

export const withToken = (callback: (token: string) => void) => {
  const token = config.getToken()
  if (token) {
    callback(token)
  } else {
    console.error(chalk.redBright('no token'))
    throw new Error("tokenNotFound");
  }
}