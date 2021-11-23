// Write a range function that takes a start and end number and returns an array with all the numbers in between
const range = (start, end) => {
    let result = [];
    while (start <= end) {
        result.push(start);
        start++;
    }
    return result;
}
// Write a sum function that takes an array of numbers and returns the sum of those numbers
const arraySum = (array) => {
    let result = 0;
    for (let item of array) {
        result = item + result;
    }
    return result;
}
console.log(range(1, 10))
console.log(arraySum(range(1, 10)));
console.log(range(5, 2))

// Modify the range function to take an optional step argument. Make sure it works with negative step values
rangeWithSteps = (start, end, step) => {
    let result = [];
    if (step < 0) {
        while (start >= end) {
            result.push(start);
            start += step;
        }
        return result;
    }
    while (start <= end) {
        result.push(start);
        start += step;
    }
    return result;
}

console.log(rangeWithSteps(1, 10, 2))
console.log(rangeWithSteps(5, 2, -1))

// Write a function reverseArray that takes an array and produces a new array that has the same elements in the reverse order
const reverseArray = (array) => {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const arrayToReverse = [1, 2, 3, 4, 5]
console.log(reverseArray(arrayToReverse));
console.log("The original array: " + arrayToReverse)

// Write a function reverseArrayInPlace that will mutate the original array
const reverseArrayInPlace = (array) => {
    // Save off a copy of the data
    const copy = [...array]; //doing copy = array only made a copy of the pointer. Declaring an array and spreading the existing data into it created a new copy for me to read from
    let counter = 0;
    // Run a loop for t he length of the array
    for (let i = array.length - 1; i >= 0; i--) {
        array[counter] = copy[i];
        counter++;
    }
    return array;
}

console.log(reverseArrayInPlace(arrayToReverse))



