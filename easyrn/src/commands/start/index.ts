import { Command, Flags } from '@oclif/core'
import { config } from '../../utils/local'
import { withToken } from '../../utils/withToken'

export default class StartIndex extends Command {
  async catch(error: any) {
    console.log('错误', error)
    throw error;
  }
  static description = 'start project'
  public async run(): Promise<void> {
    // const token = config.getToken()
    withToken(token => {
      console.log('saul kkkkkkkkkk', token)
    })
  }
}
