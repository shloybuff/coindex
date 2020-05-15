const program = require('commander')
const key = require('./command/key')

program
.command('set')
.description('set API Key')
.action(key.set)

program
.command('show')
.description('show API Key')
.action(key.show)

program
.command('remove')
.description('remove API Key')
.action(key.remove)

program.parse(process.argv)