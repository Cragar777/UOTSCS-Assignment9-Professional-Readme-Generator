// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
            message: 'Describe how to use the application:'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Choose a licence for the application:',
            choices: ['MIT', 'BSD', 'Apache', 'None']
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
            type: 'input',
            name: 'github',
            message: 'Enter your github username:'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        }
    ])

// TODO: Create a function to write README file
// Save answers in data
.then(function(data) {

    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');    
    });
});    

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
