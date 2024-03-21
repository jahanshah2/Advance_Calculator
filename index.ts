#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message:chalk.bgGreen.bold("Enter The First Number"), type: "number", name: "firstNumber"},
  { message:chalk.bgGreen.bold("Enter The Second Number"), type: "number", name: "secondNumber" },
  {
    message:chalk.italic.bgWhite.black("select the one operator"),
    type: "list",
    name: "operators",
    choices: [
      chalk.bgRed.underline.whiteBright("Addition"),
      chalk.bgRed.underline.whiteBright("Subtrection"),
      chalk.bgRed.underline.whiteBright("Multiplication"),
      chalk.bgRed.underline.whiteBright("Division"),
      chalk.bgRed.underline.whiteBright("Exponentiation"),
      chalk.bgRed.underline.whiteBright("Modulus"),
      chalk.bgRed.underline.whiteBright("BMI"),
    ],
  },
]);
if (answer.operators === chalk.bgRed.underline.whiteBright("Addition")) {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("Subtrection")) {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("Multiplication")) {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("Division")) {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("Exponentiation")) {
  console.log(answer.firstNumber ** answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("Modulus")) {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operators === chalk.bgRed.underline.whiteBright("BMI")) {
  console.log(answer.firstNumber / (answer.secondNumber * answer.secondNumber));
} else {
  console.log(chalk.bgRed("Warrning!")+"Please Select Valid Operaters");
}
