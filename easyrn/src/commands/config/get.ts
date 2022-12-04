import { Command, Flags } from '@oclif/core'
import { config } from '../../utils/local'

export default class ConfigGet extends Command {
  public async run(): Promise<void> {
    console.log(config.getHost())
  }
}
