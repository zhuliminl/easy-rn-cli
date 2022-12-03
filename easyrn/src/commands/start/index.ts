import { Command, Flags } from '@oclif/core'
import { getToken, getUsername } from '../../utils/local'
import { withToken } from '../../utils/withToken'

export default class StartIndex extends Command {
  static description = 'start project'
  public async run(): Promise<void> {
    const username = getUsername()
    const token = getToken()
    withToken(token => {
      console.log('saul kkkkkkkkkk', token)
    })
  }
}
