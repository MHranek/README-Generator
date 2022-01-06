// Include packages needed for this application
const inquirer = require('inquirer');
const gMD = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Create an array of questions for user input
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
        name: 'usageInfo',
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
        choices: ['MIT License', 'Apache License', 'Boost Software License', 'GNU General Public License', 'Mozilla Public License'],
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

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success")
    });
}

// Create a function to initialize app
function init() {
    // Prompt the user
    inquirer
        .prompt(questions)
        // save the responses
        .then((response) => {
            // Write data to new file
            // If github name specific readme is requested:
            // const fileName = './output/' + response.gitHubUser.toUpperCase() + '_README.md';
            writeToFile('./output/TEST_README.md', gMD(response));
        });
}

// Function call to initialize app
init();
