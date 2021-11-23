// Write a loop that makes seven calls to console.log to output a triangle that looks like this:
/*
#
##
###
####
#####
######
#######
*/
let printout = "";

while (printout.length < 7) {
    printout = printout + "#"
    console.log(printout);
}


// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:
// Numbers divisible by 3, print Fizz instead
// Numbers divisible by 5 and not divisible by 3, print buzz instead
// When that is working, modify it so that numbers divisible by both 3 and 5 print FizzBuzz



// Count all numbers from 1-100
for (let i = 1; i <= 100; i++) {
    // If the number is divisible by 3, print Fizz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz");
        // If the number wasn't divisible by 3 but is divisible by 5, print Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz")
        // Otherwise just print the number
    } else {
        console.log(i)
    }
}

// Write a program that creates a string that represents an 8 x 8 grid using newline characters to separate the lines
// At each position of the grid there is either a space or a # character
// The define a binding so that it works for any size

let board = "";
let numberOfRows = 20;
for (let i = 0; i < numberOfRows; i++) {
    // Even rows we want to add this: "# # # # \n"
    if (i % 2 === 0) {
        board += "# # # # \n"
    } else {
        // Odd rows we want to add this: " # # # #\n"
        board += " # # # #\n"
    }
}
console.log(board)





