// TODO: Include packages needed for this application
const fs = require['fs'];
const inquirer = require['inquirer'];

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },

        {
            type: 'input',
            name: 'projectDescription',
            message: 'Describe your project:'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Describe how to install and run the application:'
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Describe :'
        },

        {
            type: 'list',
            name: 'licence',
            message: 'Choose a licence for the application:',
            choices: ['MIT', 'GPL', 'Apache']
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Describe how to contribute to the project:'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Describe the tests used to verify the application functionality:'
        },

        {
            type: 'checkbox',
            name: 'questions',
            message: 'Which contact method should be used to contact for questions?',
            choices: ['Github', 'email']
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
