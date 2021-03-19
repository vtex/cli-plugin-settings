# VTEX CLI Plugin Settings

Extend the `vtex` toolbelt!

## Developing

1. Clone `vtex/toolbelt` and follow the steps on the Contributing section.
2. Clone/Create a plugin with this template.
3. Change the template name under this project's `package.json`.
2. Run `yarn link` on this project.
3. Now run `vtex link @vtex/cli-plugin-settings` (or the new name) on the `vtex/toolbelt` project.
4. Run `yarn watch` on the `vtex/toolbelt`
5. Test the command on a VTEX IO app with `vtex-test hello`

For more information, read [Ocliff Docs](https://oclif.io/docs/introduction).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-settings)

<!-- toc -->
* [VTEX CLI Plugin Settings](#vtex-cli-plugin-settings)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-settings
$ vtex COMMAND
running command...
$ vtex (-v|--version|version)
@vtex/cli-plugin-settings/0.0.0 linux-x64 node-v12.21.0
$ vtex --help [COMMAND]
USAGE
  $ vtex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vtex settings:get APPNAME [FIELD]`](#vtex-settingsget-appname-field)
* [`vtex settings:set APPNAME FIELD VALUE`](#vtex-settingsset-appname-field-value)
* [`vtex settings:unset APPNAME FIELD`](#vtex-settingsunset-appname-field)

## `vtex settings:get APPNAME [FIELD]`

Get app settings

```
USAGE
  $ vtex settings:get APPNAME [FIELD]

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

ALIASES
  $ vtex settings

EXAMPLE
  vtex settings get vtex.service-example
```

_See code: [build/commands/settings/get.ts](https://github.com/vtex/cli-plugin-settings/blob/v0.0.0/build/commands/settings/get.ts)_

## `vtex settings:set APPNAME FIELD VALUE`

Set app settings

```
USAGE
  $ vtex settings:set APPNAME FIELD VALUE

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex settings set vtex.service-example fieldName fieldValue
```

_See code: [build/commands/settings/set.ts](https://github.com/vtex/cli-plugin-settings/blob/v0.0.0/build/commands/settings/set.ts)_

## `vtex settings:unset APPNAME FIELD`

Unset app settings

```
USAGE
  $ vtex settings:unset APPNAME FIELD

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex settings unset vtex.service-example fieldName
```

_See code: [build/commands/settings/unset.ts](https://github.com/vtex/cli-plugin-settings/blob/v0.0.0/build/commands/settings/unset.ts)_
<!-- commandsstop -->
