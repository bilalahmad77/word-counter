#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`.......Let's start program ........`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 206)(`Please enter the paragraph you want to convert:`)
        }
    ]);
    const word_arr = que.str.split(" ");
    console.log(`Words in paragraph:${word_arr.length}`);
    const chr_withoutspaces = que.str.replace(/ /g, "");
    console.log(`Characters in paragraph: ${chr_withoutspaces.length}`);
}
async function statAgain() {
    do {
        await askQuestion();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.rgb(187, 143, 206)(`Do you want to continue again ? Press Y or N`),
        });
    } while (playAgain.restart === "y" || playAgain.restart === "Y" || playAgain.restart === "yes" || playAgain.restart === "YES");
}
statAgain();
