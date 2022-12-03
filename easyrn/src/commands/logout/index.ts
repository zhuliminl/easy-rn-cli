import { Command, Flags } from '@oclif/core'
import { config } from '../../utils/conf'

export default class LogoutIndex extends Command {
  static description = 'logout'
  clear = () => {
    config.delete('user_token')
    config.delete('user_name')
  }
  public async run(): Promise<void> {
    this.clear()
  }
}
