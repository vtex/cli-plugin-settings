<<<<<<< HEAD
import { CustomCommand, ColorifyConstants } from 'vtex'
import appsSettingsSet from '../../modules/set'

export default class SettingsSet extends CustomCommand {
  static description = 'Sets value to an app setting.'

  static examples = [
    `${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex settings set')} vtex.service-example fieldName fieldValue`,
    `${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex settings set')} vtex.store enableCriticalCSS true`,
  ]
=======
import { CustomCommand } from 'vtex'
import appsSettingsSet from '../../modules/set'

export default class SettingsSet extends CustomCommand {
  static description = 'Set app settings'

  static examples = ['vtex settings set vtex.service-example fieldName fieldValue']
>>>>>>> 528ff8d (Settings command)

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = [
<<<<<<< HEAD
    { name: 'appName', required: true, description: `Name of the app.` },
    { name: 'field', required: true, description: `Name of the setting.` },
    { name: 'value', required: true, description: `Value of the setting.` },
=======
    { name: 'appName', required: true },
    { name: 'field', required: true },
    { name: 'value', required: true },
>>>>>>> 528ff8d (Settings command)
  ]

  async run() {
    const {
      args: { appName, field, value },
    } = this.parse(SettingsSet)

    await appsSettingsSet(appName, field, value)
  }
}
