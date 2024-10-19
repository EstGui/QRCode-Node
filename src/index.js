import prompt from "prompt"
import chalk from "chalk";
import mainPrompt from './prompts-schema/schema-main.js'
import createQRCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

function main() {
    prompt.get(mainPrompt, (err, result) => {
        if (result.select == 1) createQRCode();
        else if (result.select == 2) createPassword();
    })

    prompt.start();
}

main()