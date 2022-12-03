import { Command, Flags, CliUx } from '@oclif/core'
import fetch from 'node-fetch';
import { config } from '../../utils/conf'

const inquirer = require('inquirer')
var QRCode = require('qrcode')


// 登录方式
const loginChoices = [
  {
    key: 'email',
    name: '邮箱',
  },
  {
    key: 'phoneNumber',
    name: '手机号',
  },
  {
    key: 'wx',
    name: '微信扫码',
  },
]

export default class LoginIndex extends Command {
  static description = '登录'

  static flags = {
    name: Flags.string({ char: 'n', description: 'name to print' }),
    force: Flags.boolean({ char: 'f' }),

  }

  static args = [{ name: 'file' }]

  loginBy = (stageName: string) => {
    let stageKey = ''
    loginChoices.forEach(item => {
      if (item.name === stageName) {
        stageKey = item.key
      }
    })
    if (stageKey === 'email') {
      this.loginByEmail()
    }
    if (stageKey === 'phoneNumber') {
      this.loginByEmail()
    }
    if (stageKey === 'wx') {
      this.loginByWx()
    }
    // no stage found
  }

  loginByEmail = async () => {
    const email = await CliUx.ux.prompt('邮箱')
    const password = await CliUx.ux.prompt('密码', { type: 'hide' })
    const res = await this.requestLoginByEmail({ email, password })
    if (res) {
      this.onLoginSuccess(res)
    } else {
      // 
      console.log('登录失败')
    }
  }

  requestLoginByEmail = ({ email = '', password = '' }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: 'tokenxxxxxx',
          username: 'saul',
        })
      }, 1000);
    })
  }

  loginByPhone = () => {

  }

  loginByWx = () => {

  }

  onLoginSuccess = ({ token = '', username = '' }) => {
    config.set('user_token', token)
    config.set('user_name', username)
  }

  public async run(): Promise<void> {
    console.log('saul bbbbb', inquirer)
    let stage = loginChoices[0].name
    const res: any = await inquirer.prompt([{
      name: 'stage',
      message: '请选择登录方式',
      type: 'list',
      choices: loginChoices,
    }])
    stage = res.stage
    this.loginBy(stage)


    return
    // just prompt for input
    const name = await CliUx.ux.prompt('用户名')

    // mask input after enter is pressed
    const secondFactor = await CliUx.ux.prompt('What is your two-factor token?', { type: 'mask' })

    // hide input while typing
    const password = await CliUx.ux.prompt('What is your password?', { type: 'hide' })

    this.log(`You entered: ${name}, ${secondFactor}, ${password}`)

    /*
    const response = await fetch('https://api.github.com/users/github');
    const data = await response.json();

    console.log(data);
    */

  }
}
