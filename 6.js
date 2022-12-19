const array1 = [3, "Apple", false, 31409.3041, "four", 5, 6]
const thing = 4;

function exist(array, check) {
    if(array1.includes(thing)) {
        return true;
    } else {
        return false;
    }
}

if(exist(array1, thing)) {
    console.log("Thing is in array");
} else {
    console.log("Thing is not in array"); 
}