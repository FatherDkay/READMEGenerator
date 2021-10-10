const inquirer = require('inquirer');
const fs = require('fs');
const promptUser = () => {
var badge ="";
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('Please enter the project title!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project? (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter the project description!');
                return false;
              }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose a license',
            choices: ["Boost Software License 1.0", "Apache 2.0", "The MIT License", "WTFPL"],              
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter the installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Enter the contributor informaiton',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter the testing instructions',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter the questions instructions',
        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                return true;
                } else {
                console.log('We arent going anywhere until you enter your GitHub user name!  Out with it!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Hey, dont be shy...enter your email address');
                return false;
                }
            }
        },
    ])
    .then(({title, description, install, usage, license, contributors, userName, email}) =>{
        switch(license) {
            case "Apache 2.0":
                badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "Boost Software License 1.0":
                badge ="[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            case "The MIT License":
                badge ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";    
            case "WTFPL":
                badge ="[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
            };

        const readmeInfo = `# ${title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Use](#use)
* [Contribution](#contribution)
* [License](#license)
* [GitHub User Name / Email](#user)

## Description
${description}\n
## Installation
${install}\n
## Use
${usage}\n
## Contribution
${contributors}\n
## License
${badge}\n
${license}\n
### User
${userName}\n
### Email
${email}
`
fs.writeFile("readme.md",readmeInfo,(err) => {
    if(err){
        console.log(err)
    }
    console.log('ReadMe file has been created!')
});

});
}

promptUser();
