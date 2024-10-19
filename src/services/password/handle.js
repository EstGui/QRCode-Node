import allowedChars from "./utils/allowedChars.js";

function handle() {
    let chars = allowedChars();
    let password = "";

    const passwordLen = process.env.PASS_LEN

    for (let i = 0; i < passwordLen; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

export default handle;