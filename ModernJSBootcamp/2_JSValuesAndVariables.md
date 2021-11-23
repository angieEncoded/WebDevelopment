
//Number - only one type that stores all numbers. Not infinitely precise
All basic operations available
Addition         +
Subtraction      -
Multiplication   *
Division         \
Modulo           %
Exponent         **
Parentheses      () - change order of operations

// NaN
Numeric value that represents not a number
0/0 is NaN
1 + NaN is NaN

// Infinity
1/0 - no way to store this as a number

// -Infinity 
-1/0

// -0 
is its own value

// Variables and Let
Variables are like labeled jars for a value in JS
We can store and five them names so that we can
- recall it
- use it
- change it later on
 
// Syntax
let somename = value;
let age = 72;

// We can use these in operations
let hens = 4;
let roosters = 2;
let totalChickens = hens + roosters;

// Updating variables
let age = 10;
age = age + 1;
age = someOtherValue;
age += 1; // Update score by one
age -= 5; // subtract by 5
age *= multiplierVariable; // Use a variable to multiply

// Rules and conventions
- no keywords (let, const, for, document, etc - you will get lexically bound name error)
- use camelCase
- Cannot redeclare variables

// Unary operators - operators that only have one side
let counter = 0;
counter++;
counter--;

// const
Works like let, but you cannot change the value
const hens = 2;
hens = 30; // this will generate an error
Note that you cannot use the same variable name between let and const
let name = "myName";
const name = "myName"; - this won't work

// var
older way to create variables
scoped differently than let and const