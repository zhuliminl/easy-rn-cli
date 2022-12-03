import { Command, Flags } from '@oclif/core'
import * as fs from 'fs-extra'
import * as path from 'path'


/*
export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({ char: 'f', description: 'Who is saying hello', required: true }),
  }

  static args = [{ name: 'person', description: 'Person to say hello to', required: true }]

  async run(): Promise<void> {
    console.log('saul FFFFFFFFFFFFF')
    const { args, flags } = await this.parse(Hello)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}

*/

export default class MyConmand extends Command {
  static description = "xxxxxx"

  static args = [
    {name: 'firstArg'},
    {name: 'secondArg'},
  ]

  static flags = {
    force: Flags.boolean({char: 'f'}),
    file: Flags.string(),
    port: Flags.integer(),

  }

  async run():Promise<void> {

    const {args, argv} = await this.parse(MyConmand)
    console.log('saul args', args)
    console.log('saul argv', argv)

    const {flags} = await this.parse(MyConmand)
    console.log('saul FFFFFFFFF', flags)

    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'))
    // console.log('saul ccccccccc', userConfig)
    console.log('sthis', this.config)



    this.exit(0)
  }
}
