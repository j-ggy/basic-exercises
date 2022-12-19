function bigger (x, y) {
    if (x > y) {
        return true;
    } else if (x < y) {
        return false;
    } else {
        console.log("Neither input is bigger than the other.")
    }
}

const x = Math.round(Math.random()*1000)
const y = Math.round(Math.random()*1000)

if (bigger(x, y)) {
    console.log(x + " is bigger than " +y)
} else {
    console.log(y + " is bigger than " + x)
}