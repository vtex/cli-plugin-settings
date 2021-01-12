<<<<<<< HEAD
import { CustomCommand, ColorifyConstants } from 'vtex'
import appsSettingsGet from '../../modules/index'

export default class SettingsGet extends CustomCommand {
  static description = 'Prints the settings of an app.'

  static aliases = ['settings']

  static examples = [`${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex settings get')} vtex.service-example`]
=======
import { CustomCommand } from 'vtex'
import appsSettingsGet from '../../modules/index'

export default class SettingsGet extends CustomCommand {
  static description = 'Get app settings'

  static aliases = ['settings']

  static examples = ['vtex settings get vtex.service-example']
>>>>>>> 528ff8d (Settings command)

  static flags = {
    ...CustomCommand.globalFlags,
  }

<<<<<<< HEAD
  static args = [
    { name: 'appName', required: true, description: 'Name of the app to check the available settings.' },
    { name: 'field', description: 'Name of the setting.' },
  ]
=======
  static args = [{ name: 'appName', required: true }, { name: 'field' }]
>>>>>>> 528ff8d (Settings command)

  async run() {
    const {
      args: { appName, field },
    } = this.parse(SettingsGet)

    await appsSettingsGet(appName, field ? [field] : null)
  }
}
