const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description of your project:',
            name: 'desc',
        },
        {
            type: 'list',
            message: 'Please choose a license for your application.',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'BSD 3']
        },
        {
            type: 'input',
            message: 'What is required to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for use:',
            name: 'useage',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines:',
            name: 'countrib',
        },
        {
            type: 'input',
            message: 'Please provide test instructions:',
            name: 'test',
        },
    ])
    .then((resp) => {
        // console.log(resp)
        markdown.writeFile(resp)
    })