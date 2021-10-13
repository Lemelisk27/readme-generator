const fs = require('fs')

function writeFile(resp) {
    fs.writeFile('README.md',
    `# ${resp.title}
![license badge](https://img.shields.io/badge/license-${resp.license}-blue)
## Description
${resp.desc}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${resp.install}
## Usage
${resp.useage}  
![screenshot](assets/images/screenshot.png)
## Credits
Zach Smith - [GitHub Profile](https://github.com/${resp.username})
## License
This product is licensed under the ${resp.license} license.
## How to Contribute
${resp.countrib}
## Tests
${resp.test}
## Questions
If you have any questions you can contact me directly at ${resp.email}. You can find more of my work at [${resp.username}](https://github.com/${resp.username})
`,
    function (error) {
        if (error) {
            console.log(error)
        }
    })
}

module.exports = {
    writeFile,
}