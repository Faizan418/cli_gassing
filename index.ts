#! /usr/bin/env node

import inquirer from "inquirer";

//1) Computer will generate a random number... Done...

//2) User input for gussing number... Done...

//3) Compare user input with computer generated number and show result...

const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
// const randomNumber = 13;
const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
  },
]);

if (answers.userGuessNumber === randomNumber) {
  console.log("congtratulations! you guessed right number.");
} else {
  console.log("You guessed wrong number");
}
