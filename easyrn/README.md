oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g easyrn
$ easyrn COMMAND
running command...
$ easyrn (--version)
easyrn/0.0.0 darwin-x64 node-v16.18.0
$ easyrn --help [COMMAND]
USAGE
  $ easyrn COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`easyrn build [FILE]`](#easyrn-build-file)
* [`easyrn clear`](#easyrn-clear)
* [`easyrn help [COMMAND]`](#easyrn-help-command)
* [`easyrn init [FILE]`](#easyrn-init-file)
* [`easyrn login [FILE]`](#easyrn-login-file)
* [`easyrn logout`](#easyrn-logout)
* [`easyrn plugins`](#easyrn-plugins)
* [`easyrn plugins:install PLUGIN...`](#easyrn-pluginsinstall-plugin)
* [`easyrn plugins:inspect PLUGIN...`](#easyrn-pluginsinspect-plugin)
* [`easyrn plugins:install PLUGIN...`](#easyrn-pluginsinstall-plugin-1)
* [`easyrn plugins:link PLUGIN`](#easyrn-pluginslink-plugin)
* [`easyrn plugins:uninstall PLUGIN...`](#easyrn-pluginsuninstall-plugin)
* [`easyrn plugins:uninstall PLUGIN...`](#easyrn-pluginsuninstall-plugin-1)
* [`easyrn plugins:uninstall PLUGIN...`](#easyrn-pluginsuninstall-plugin-2)
* [`easyrn plugins update`](#easyrn-plugins-update)
* [`easyrn publish [FILE]`](#easyrn-publish-file)
* [`easyrn start`](#easyrn-start)

## `easyrn build [FILE]`

describe the command here

```
USAGE
  $ easyrn build [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ easyrn build
```

_See code: [dist/commands/build/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/build/index.ts)_

## `easyrn clear`

xxxx

```
USAGE
  $ easyrn clear

DESCRIPTION
  xxxx
```

_See code: [dist/commands/clear/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/clear/index.ts)_

## `easyrn help [COMMAND]`

Display help for easyrn.

```
USAGE
  $ easyrn help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for easyrn.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `easyrn init [FILE]`

describe the command here

```
USAGE
  $ easyrn init [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ easyrn init
```

_See code: [dist/commands/init/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/init/index.ts)_

## `easyrn login [FILE]`

登录

```
USAGE
  $ easyrn login [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  登录
```

_See code: [dist/commands/login/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/login/index.ts)_

## `easyrn logout`

logout

```
USAGE
  $ easyrn logout

DESCRIPTION
  logout
```

_See code: [dist/commands/logout/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/logout/index.ts)_

## `easyrn plugins`

List installed plugins.

```
USAGE
  $ easyrn plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ easyrn plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `easyrn plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ easyrn plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ easyrn plugins add

EXAMPLES
  $ easyrn plugins:install myplugin 

  $ easyrn plugins:install https://github.com/someuser/someplugin

  $ easyrn plugins:install someuser/someplugin
```

## `easyrn plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ easyrn plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ easyrn plugins:inspect myplugin
```

## `easyrn plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ easyrn plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ easyrn plugins add

EXAMPLES
  $ easyrn plugins:install myplugin 

  $ easyrn plugins:install https://github.com/someuser/someplugin

  $ easyrn plugins:install someuser/someplugin
```

## `easyrn plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ easyrn plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ easyrn plugins:link myplugin
```

## `easyrn plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easyrn plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easyrn plugins unlink
  $ easyrn plugins remove
```

## `easyrn plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easyrn plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easyrn plugins unlink
  $ easyrn plugins remove
```

## `easyrn plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ easyrn plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ easyrn plugins unlink
  $ easyrn plugins remove
```

## `easyrn plugins update`

Update installed plugins.

```
USAGE
  $ easyrn plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `easyrn publish [FILE]`

describe the command here

```
USAGE
  $ easyrn publish [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ easyrn publish
```

_See code: [dist/commands/publish/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/publish/index.ts)_

## `easyrn start`

start project

```
USAGE
  $ easyrn start

DESCRIPTION
  start project
```

_See code: [dist/commands/start/index.ts](https://github.com/zhuliminl/hello-world/blob/v0.0.0/dist/commands/start/index.ts)_
<!-- commandsstop -->
