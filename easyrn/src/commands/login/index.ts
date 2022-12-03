import { Command, Flags } from '@oclif/core'
import fetch from 'node-fetch';

export default class LoginIndex extends Command {
  static description = 'xxxxxx'

  static flags = {
    name: Flags.string({ char: 'n', description: 'name to print' }),
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    console.log('saul Glo', globalThis.fetch)

    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();

    console.log(data);

  }
}
