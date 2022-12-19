const { exit } = require("process");
const prompt = require("prompt-promise");

string = [];

async function getString() { // gets input and pushes into string array
    let input;
    input = (await prompt("Enter a string:\n")).toLowerCase();
    string.push(input);
}

async function mainLoop() { 
    await getString();
    console.log(string);
    exit();
}
mainLoop();