import {Command, Flags} from '@oclif/core'
import { getToken, getUsername } from '../../utils/local'

export default class StartIndex extends Command {
  static description = 'start project'
  public async run(): Promise<void> {
    const username = getUsername()
    const token = getToken()
    console.log('saul LLL', username)
    console.log('saul tokne', token)
  }
}
