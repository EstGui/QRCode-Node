import prompt from "prompt";
import handle from "./handle.js";
import promptQRCode from "../../prompts-schema/schema-qrcode.js";


function createQRCode() {
    prompt.get(promptQRCode, handle)

    prompt.start();
}

export default createQRCode;