#!/usr/bin/env node

import inquirer from "inquirer";

let balance: number = 10000;
const user_pin: number = 2023;
let question;
let attempts = 3;
console.log(`Wellcome to ATM`);
do {
  question = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: "please enter a pin :",
    },
  ]);
  attempts--;
  if (question.pin === user_pin) {
    console.log("Entered successfully.");
    break;
  } else if (question.pin !== user_pin) {
    console.log(`your pin is incorrect.only ${attempts} are left.`);
    if (attempts == 0) {
      console.log(`Sorry, timeout.`);
      process.exit(1);
    }
  }
} while (true);

let options = await inquirer.prompt([
  {
    name: "Option",
    type: "list",
    message: "Select options :",
    choices: ["current balance", "withdraw cash"],
  },
]);
if (options.Option === "current balance") {
  console.log(`Your current balance is : ${balance}.\nThanks for visiting, have a nice day.`);

} else if (options.Option === "withdraw cash") {
  let ask;
  do {
    ask = await inquirer.prompt([
      {
        name: "Ask",
        message: "Enter amount :",
        type: "input",
      },
    ]);
    if (ask.Ask <= balance) {
      break;
    } else {
      console.log(
        `Your current balance is ${balance}. So enter small or equal amount.`
      );
    }
  } while (true);
  let slip = await inquirer.prompt([
    {
      name: "Slip",
      message: "Do you want slip?",
      type: "list",
      choices: ["Yes", "No"],
    },
  ]);
  if (slip.Slip == "Yes") {
    console.log(`Take your slip, and thank you for cash withdraw.`);
  } else if (slip.Slip == "No") {
    console.log(`Thank you for cash withdraw, have a nice day.`);
  }
}
