// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
      },
      {
        type: 'input',
        name: 'Description',
        message:'Provide a description of your project:'
      },
      {
        type: 'input',
        name: 'Instalation',
        message:'Provide steps on how to install:',
      },
      {
        type: 'input',
        name: 'Usage',
        message:'Provide steps on how to use:'
      },
      {
        type: 'input',
        name: 'Credits',
        message:'List any colaborators that helped with this project'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [1,2,3]
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// appendAnswer(fileName,`#${data.title}`);
// addSpace(fileName,2);
// appendAnswer(fileName,`##Description`)
// addSpace(fileName,1)
// appendAnswer(fileName,data.Description)
    fs.appendFile(fileName, data, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        }
      });
}
function appendAnswer(fileName, text){

}
function addSpace (fileName,num){
    for(i=0;i<num;i++){
        fs.appendFile(fileName, `\n`, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
            }
          });
    }
}
function clear(){
      fs.writeFile(`../lol.txt`, '', (err) => {
    if (err) {
      console.error('Error writing to file1:', err);
    } else {
      console.log('File1 content has been wiped and replaced successfully!');
    }
  });
}
// TODO: Create a function to initialize app
function init() { 
    clear()
    inquirer.prompt(questions).then((data) => {
    console.log(`Generating README...`);
    return generateMarkdown(data);})
    .then(final => {
        writeToFile(`../lol.txt`,final)
    })
    // writeToFile(,answers)

  }

// Function call to initialize app
init();