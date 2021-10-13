const fs = require('fs')
const licenseUrl = "https://img.shields.io/badge/license-MIT-blue"

const data = 
{
    username: 'Lemelisk27',
    email: 'Lemelisk27@gmail.com',
    title: 'README Generator',
    desc: 'This is a project',
    license: 'MIT',
    install: 'npm i',
    useage: 'Just do it',
    countrib: 'No!',
    test: 'Nope'
}

// title(data)

function title(data) {
  fs.writeFile('README.md', `# ${data}\n`, function(error) {
    if (error) {
      console.log(error)
    }
  })
}

function licenseBadge(data) {
  fs.appendFile('README.md', `![license badge](https://img.shields.io/badge/license-${data}-blue)`, function(error) {
    if (error) {
      console.log(error)
    }
  })
}

function description(data) {
  fs.appendFile('README.md',
    `\n## Description\n${data}`,
    function (error) {
      if (error) {
        console.log(error)
      }
    }
  )
}

function contents() {
  fs.appendFile('README.md',
  `\n## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)\n`,
    function (error) {
      if (error) {
        console.log(error)
      }
    }
  )
}

module.exports = {
  title,
  licenseBadge,
  description,
  contents,
}