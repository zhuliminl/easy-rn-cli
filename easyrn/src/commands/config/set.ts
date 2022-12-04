import { Command, Flags } from '@oclif/core'
import { config } from '../../utils/local'

export default class ConfigSet extends Command {
  static description = 'config set'

  static flags = {
    registry: Flags.string({
      char: "r",
      description: "xxx",
      required: true,
    }),
  }

  setRegistry = (registry: string) => {
    config.updateHost(registry)
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(ConfigSet);
    if (flags.registry) {
      this.setRegistry(flags.registry)
    }
  }
}
