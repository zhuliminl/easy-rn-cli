import { Command, Flags } from '@oclif/core'
import * as notifier from 'node-notifier'
import { clear } from '../../utils/local'

export default class LogoutIndex extends Command {
  static description = 'logout'
  clear = () => {
    clear()
  }
  public async run(): Promise<void> {
    this.clear()
    notifier.notify({
      title: 'easyrn',
      message: '退出登录成功'
    })
  }
}
