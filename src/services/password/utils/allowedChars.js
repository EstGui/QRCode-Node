function allowedChars() {
    let chars = []; 

    if (process.env.UPPERCASE_LETTERS === "true")
        chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (process.env.LOWERCASE_LETTERS === "true")
        chars.push(..."abcdefghijklmnopqrstuvwxyz");

    if (process.env.NUMBERS === "true")
        chars.push(..."0123456789");

    if (process.env.SPECIAL_CHAR === "true")
        chars.push(..."!@#$%&*-_:./()^");

    return chars;
}

export default allowedChars;