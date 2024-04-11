#! /usr/bin/env node
import inquirer from "inquirer";
let my_balance = 50000;
let my_pin = 12345;
let pin_check = await inquirer.prompt([
    { message: "Enter pin number", type: "number", name: "PIN" },
]);
if (pin_check.PIN === my_pin) {
    let operation = await inquirer.prompt([
        { message: "Select any one", type: "list", name: "list", choices: ["withdraw", "check balance"] },
    ]);
    if (operation.list === "withdraw") {
        let amount = await inquirer.prompt([
            { message: "Enter your amount", type: "number", name: "amount" },
        ]);
        my_balance -= amount.amount;
        console.log("your remaining balance is:" + my_balance);
    }
    else if (operation.list === "check balance") {
        console.log("your balance is:" + my_balance);
    }
}
else {
    console.log("invalid pin");
}
