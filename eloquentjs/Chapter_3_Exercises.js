// Write a min functions
const getMinNumber = (x, y) => {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
const lowest = getMinNumber(5, 7);
console.log(lowest);

// Write a recursive function according to the following parameters:
// Zero is even
// One is odd
// Any other number n, its evenness is the same as n - 2

const isEven = (x) => {
    // Deal with negative numbers by converting them to abs
    if (x < 0) {
        x = Math.abs(x);
    }

    if (x === 0) {
        return true;
    } else if (x === 1) {
        return false;
    } else {
        return isEven(x - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(2));
console.log(isEven(7));
console.log(isEven(-1));
console.log(isEven(-0));



// Now write a function that takes a string and the character to search for and returns the number of characters
const numberOfCharacters = (inputString, characterToSearch) => {
    let count = 0;
    for (let item of inputString) {
        if (item === characterToSearch) {
            count++;
        }
    }
    return count;
}

console.log(numberOfCharacters("Test this string for s characters", "s"));


// Write a function that takes a string and returns a number that lists uppercase B's
// Then rewrite it to call numberOfCharacters instead (and put the other function above since I am using an arrow function)
const numberOfBCharacters = (x) => {
    return numberOfCharacters(x, "B");

    // let count = 0;
    // for (let item of x) {
    //     if (item === "B") {
    //         count++
    //     }
    // }
    // return count;
}

console.log(numberOfBCharacters("This Is a B Rated Movie Yes B B B BB BBBBB"));

