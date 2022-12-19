const { exit } = require("process");
const prompt = require("prompt-promise")

const rpsAr = ["Rock", "Paper", "Scissors"]
const valid = [1,2,3,4]

async function getGuess() {
    while (true) {
        input = Number(await prompt("[1]:Rock, [2]:Paper or [3]Scissors, [4]Exit?\n"));
        if ([1,2,3,4].includes(input)){
            return input;
        } else {
            console.log("invalid input")
        }
    }
}

// function whoWins(guess) {
//     if (guess == 1) {
//         console.log("Bot used paper, you lose!")
//     } else if (guess == 2) {
//         console.log("Bot used scissors, you lose!")
//     } else if (guess == 3) {
//         console.log("Bot used rock, you lose!")
//     } else if (guess == 4) {
//         exit();
//     }
// }
const count = {
    playerWins:0,
    compWins:0,
    ties:0
}
function whoWins(guess) {
    botGuess = (Math.floor(Math.random()*3)+1);
    console.log(`Bot used ${rpsAr[(botGuess-1)]}`)

    if (guess == botGuess) {
        console.log("It's a tie!");
        count.ties +=1;
    } else if (guess == 1) {
        if (botGuess == 2) {
            console.log(`You lost!`)
            count.compWins +=1;
        } else {
            console.log(`You won!`)
            count.playerWins +=1;
        }
    } else if (guess == 2) {
        if (botGuess == 3) {
            console.log(`You lost!`)
            count.compWins +=1;
        } else {
            console.log(`You won!`)
            count.playerWins +=1;
        }
    } else if (guess == 3) {
        if (botGuess == 1) {
            console.log(`You lost!`)
            count.compWins +=1;
        } else {
            console.log(`You won!`)
            count.playerWins +=1;
        }

    } else if (guess == 4) {
        console.log(count.playerWins + " player wins. " + count.compWins + " computer wins. " + count.ties + " ties.")
        exit();
    }
}

async function mainLoop() {
    while(count.playerWins < 5 && count.compWins <5) {
        guess = await getGuess();
        whoWins(guess);
        console.log(`Your Score: ${count.playerWins}, Computer Score: ${count.compWins}.`)
    }
    if (count.playerWins > count.compWins) {
        console.log("You won the game!")
    } else {
        console.log("You lost 'the game'.")
    }
}
mainLoop();