// Include packages needed for this application
const inquirer = require('inquirer');
const gMD = require('./utils/generateMarkdown.js');

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
        choices: ['MIT License', 'Apache License', 'Boost Software License', 'Eclipse Public License', 'GNU General Public License', 'Mozilla Public License'],
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
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user
    inquirer
        .prompt(questions)
        // save the responses
        .then((response) => {
            console.log(response);

            // generate file
            // TODO write data to new file
            writeToFile('README.md', gMD(response));
        });
}

// Function call to initialize app
init();
