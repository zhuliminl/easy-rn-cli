import { Command, Flags } from '@oclif/core'
import * as notifier from 'node-notifier'
import { config } from '../../utils/local'
const chalk = require('chalk')

export default class LogoutIndex extends Command {
  static description = 'logout'
  clear = () => {
    config.clearToken()
    config.clearUsername()
  }

  public async run(): Promise<void> {
    if (!config.getToken()) {
      console.log(chalk.yellow('您未登录'))
      this.exit(1)
      return
    }
    this.clear()
    notifier.notify({
      title: 'easyrn',
      message: '退出登录成功'
    })
    console.log('saul exit')
    this.exit(1)
  }
}
