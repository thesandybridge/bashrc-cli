#! /usr/bin/env node
const { program } = require('commander')

const alias = require('./commands/alias')

program
        .command('create <alias> <command>')
        .description('Create a bash alias')
        .action(alias)

program.parse()