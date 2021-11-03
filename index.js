#! /usr/bin/env node
const { program } = require('commander')

const alias = require('./commands/alias')
const custom = require('./commands/custom')

program
        .command('create <alias> <command>')
        .description('Create a bash alias')
        .action(alias)

program
        .command('fn <name>')
        .description('Create a custom bash function with flags')
        .action(custom)

program.parse()