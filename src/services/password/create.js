import chalk from "chalk";
import prompt from "prompt";
import handle from "./handle.js";

function createPassword() {
    console.log(chalk.green("password"));

    const password = handle();

    console.log(password);
}

export default createPassword;