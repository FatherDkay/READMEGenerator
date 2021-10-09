const inquirer = require('inquirer');
const generateReadMe = require('./src/readMe-template');
const { writeFile } =require('./utils/generate-readMe');

const promptUser = () => {
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
            choices: ["MIT", "Apache", "GPLv3"],              
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
            name: 'userEmail',
            message: 'What is your email address? (Required)',
            validate: userEmailInput => {
                if (userEmailInput) {
                return true;
                } else {
                console.log('Hey, dont be shy...enter your email address');
                return false;
                }
            }
        },
    ])
};

const promptTOC = tocData => {
    console.log(`
    =======================
    Add a Table of Contents
    =======================
    `);

    if(!tocData.lines) {
        tocData.lines = [];
    }
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'tocLine',
            message: 'Enter a TOC title (Required)',
            validate: tocInput => {
              if (tocInput) {
                return true;
              } else {
                console.log('Again, enter a toc title!');
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'confirmMoreTOC',
            message: 'Would you like to enter another TOC line?',
            default: false
         }
    ])
    .then(tocInfo => {
        tocData.lines.push(tocInfo);
        if(tocInfo.confirmMoreTOC) {
            return promptTOC(tocData);
        } else {
            return tocData;
        }
    });
};

promptUser()
    .then(promptTOC)
    .then(tocData => {
        return generateReadMe(tocData)
    });


