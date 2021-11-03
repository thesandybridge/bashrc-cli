#! /usr/bin/env node
const { program } = require('commander')
const inquirer = require('inquirer')

const alias = require('./commands/alias')
const custom = require('./commands/custom')

inquirer
  .prompt([
    { 
      type: 'list',
      message: 'What would you like to add to .bashrc?',
      name: 'config',
      choices: [
        'alias',
        'shortcut'
      ]
    }
  ])
  .then((answers) => {
    if (answers.config === 'alias' ) {
        inquirer.prompt([
                {
                        type: 'input',
                        message: 'Enter the alias name:',
                        name: 'aliasName'
                },
                {
                        type: 'input',
                        message: 'Enter the command you would like to replace:',
                        name: 'aliasCommand'
                }
        ])
        .then((secondPrompt) => {
                        alias(secondPrompt.aliasName, secondPrompt.aliasCommand)
        }) 

    } else (answers.config === 'shortcut') 
    {
        inquirer.prompt([
                {
                        type: 'input',
                        message: 'Enter the shortcut indentifier:',
                        name: 'indentifier'
                },
                {
                        type: 'input',
                        message: 'Enter the flags you would like to create:',
                        name: 'flags'
                },
                {
                        type: 'input',
                        message: 'Enter the commands for the flags:',
                        name: 'values'
                },
                {
                        type: 'input',
                        message: 'Enter the path for the shortcut:',
                        name: 'shortcut'
                }  
        ])
        .then((thirdPrompt) => {
                        custom(thirdPrompt.indentifier, thirdPrompt.flags, thirdPrompt.shortcut, thirdPrompt.values)
        }) 
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

program.parse()