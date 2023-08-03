// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?(REQUIRED)',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project:'
    },
    {
        type: `confirm`,
        name: `instCon`,
        message: `Does your READMe require installation steps?`,
    },
    {
        type: 'input',
        name: 'Instalation',
        message: 'Provide steps on how to install:',
        when: ({ instCon }) => {
            if (instCon) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: `confirm`,
        name: `usCon`,
        message: `Does your READMe require usage steps?`,
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide steps on how to use:',
        when: ({ usCon }) => {
            if (usCon) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: `confirm`,
        name: `credCon`,
        message: `Does your project have any colaborators or resourses that you would like to credit?`,
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List any colaborators that helped with this project',
        when: ({ credCon }) => {
            if (credCon) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: `confirm`,
        name: `licenseCon`,
        message: `Would you like to use github to automaticly add your license badge? (note: if you do, you have to manually add your license in the README.)`,
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your GitHub repo name?(REQUIRED)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter your GitHub repo!');
                return false;
            }
        },
        when: ({ licenseCon }) => {
            if (licenseCon) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [`MIT`, `APACHE`,'GPL',"BSD", `none`],
        when: ({ licenseCon }) => {
            if (licenseCon) {
                return false;
            } else {
                return true;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.appendFile(fileName, data, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        }
    });
}
function appendAnswer(fileName, text) {

}
function addSpace(fileName, num) {
    for (i = 0; i < num; i++) {
        fs.appendFile(fileName, `\n`, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            }
        });
    }
}
function clear() {
    fs.writeFile(`../demo.md`, '', (err) => {
        if (err) {
            console.error('Error writing to file1:', err);
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    clear()
    inquirer.prompt(questions).then((data) => {
        console.log(`Generating README...`);
        return generateMarkdown(data);
    })
        .then(final => {
            writeToFile(`../demo.md`, final)
        })
    // writeToFile(,answers)

}

// Function call to initialize app
init();
