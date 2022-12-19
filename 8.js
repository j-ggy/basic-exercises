const { exit } = require("process");
const prompt = require("prompt-promise")

const badNames = ["tums", "piccle", "interesting"];

async function getName() {
    return await prompt("What is yer name?\n");
}

function checkName(name) {
    check = name.toLowerCase();
    if (badNames.includes(check)) {
        console.log("fuck off " + name);
        exit();
    } else {
        console.log(`Hi ${name}!`);
        exit();
    }
}

async function mainLoop() {
    input = await getName();
    checkName(input);
}

mainLoop();