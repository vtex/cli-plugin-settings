import { CustomCommand, ColorifyConstants } from 'vtex'
import appsSettingsGet from '../../modules/index'

export default class SettingsGet extends CustomCommand {
  static description = 'Prints the settings of an app.'

  static aliases = ['settings']

  static examples = [`${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex settings get')} vtex.service-example`]

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [{ name: 'appName', required: true }, { name: 'field' }]

  async run() {
    const {
      args: { appName, field },
    } = this.parse(SettingsGet)

    await appsSettingsGet(appName, field ? [field] : null)
  }
}
