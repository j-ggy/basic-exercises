const prompt = require("prompt-promise")
const numArray = [];

// for (let i=0; i<4; i++){
//     numArray.push(Math.round((Math.random()*10)))
// }

async function getNums() {
    while (true) {
        input = await prompt("Enter a number or 'end' to calculate sum:\n")
        if (input === "end" && numArray.length <2) {
            console.log("You must input more than one number");
        } else if (input === "end") {
            break;
        } else {
            input = Number(input)
            if (isNaN(input)) {
                console.log("input is not a number")
            } else {
                numArray.push(input);
            }
        }
    }
}

function sumOf(numArr) { 
    let sum=0;
    for (let i=0; i<numArr.length; i++) {
        sum += numArr[i];
    }
    return sum;
}


async function mainLoop() {
    await getNums();
    console.log(sumOf(numArray));
}

mainLoop();