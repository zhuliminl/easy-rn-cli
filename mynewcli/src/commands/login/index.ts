import { Command, Flags } from '@oclif/core'
import config from '../../conf'
import fetch from 'node-fetch'

export default class LoginIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(LoginIndex)
    console.log('saul CCCCCccc', config.get('name'))

    config.set("name", "saul")

    const response = await fetch('https://github.com/');
    // const body = await response.text();

    // console.log('body',body);

  }

}
