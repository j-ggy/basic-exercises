const x = Math.round(Math.random()*1000)
const y = Math.round(Math.random()*1000)

const object = {
    numberOne: x,
    numberTwo: y
}

function diff(obj) {
    console.log('Returning difference of ' + obj.numberOne + " and " + obj.numberTwo);
    if (obj.numberOne < obj.numberTwo) {
        return obj.numberTwo - obj.numberOne;
    } else if (obj.numberOne > obj.numberTwo) {
        return obj.numberOne - obj.numberTwo;
    }
}

console.log(diff(object));