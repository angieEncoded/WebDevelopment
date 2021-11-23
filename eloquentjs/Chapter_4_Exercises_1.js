/*
This structure is a list:
    let list = {
        value: 1,
        rest:{
            value:2,
            rest:(
                value: 3,
                rest:null
            )
        }
    }

*/

// Write a function arrayToList that takes an array and builds a list
const arrayToList = (array) => {
    const addtoList = array.shift(); // Remember that shift is the one that removes, unshift adds.
    const list = { value: addtoList };

    if (array.length > 0) { // check my base case before recursing
        list.rest = arrayToList(array);
    } else {
        list.rest = null;
    }
    return list;
}

// Write a function listToArray that produces an array from a list - I ended up putting a second function inside because I couldn't see any other way to build and return an array
const listToArray = (list) => {
    // Set up an array for return 
    const array = [];

    const objectRecursion = (list) => { // an inner function to be able to populate the array
        // We need to iterate over the object
        Object.keys(list).forEach(function (key) {
            if (list[key] === null) {
                return;
            } else if (typeof list[key] === "object") { // if the object is another object, iterate over it
                objectRecursion(list[key]);
            } else {    // if the object has a single value, return it
                array.push(list[key]);
            }
        })
    }

    objectRecursion(list);
    return array;
}

// Add a helper function called prepend that takes an element and a list and creates a new list that adds the element to the front of the existing list 
const prepend = (element, list) => {

    // Convert the list to an array
    const concatArray = listToArray(list);

    // unshift the incoming element to the array
    concatArray.unshift(element);

    // Call the make list with the new array
    return arrayToList(concatArray);

}


//=====================================================

// Add another helper function nth that takes a list and a number and returns the elements at the given position in the list or undefined if there is no element
// Write a recursive function of nth if you didn't already




















// Test cases below here
//======================================================================

// Convert an array to a list and back again
const myList = arrayToList([1, 2, 3])
console.log(myList);
const myArray = listToArray(myList);
console.log(myArray)


// Add the item to the beginning of the list
const element = 8;
const existingList = { "value": 1, "rest": { "value": 2, "rest": { "value": 3, "rest": null } } }
const newList = prepend(element, existingList);
console.log(JSON.stringify(newList))