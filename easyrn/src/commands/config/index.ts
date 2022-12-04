import { Command, Flags } from '@oclif/core'

export default class ConfigIndex extends Command {
  static description = 'config here'


  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(ConfigIndex)
    console.log('saul ', flags.name)

  }
}
