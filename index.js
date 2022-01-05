// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'useageInfo',
        message: 'What is the useage information?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contributions?',
    },
    {
        type: 'input',
        name: 'testInstruct',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you want?',
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user

    // save the responses

    // generate file
}

// Function call to initialize app
init();
