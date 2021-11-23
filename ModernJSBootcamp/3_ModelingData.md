// Primitive types
Boolean - true or false values
- Efficient
- yes or no 
- 1 or 0
- do not put quotes around the boolean true or false
- let isLoggedIn = true;

// Strings
- textual values
- pieces of text wrapped in quotes
- let cat = "Yaya";
- let kitten = 'Bablet'
- stay consistent with the quotes
- wrap one set of quotes with the other to have quoted strings inside a string
- " 'in here' "
- ' "or here" '
- Strings can be concatenated
- let fullname = firstName + " " + lastName;
- numbers added to strings will be automatically converted

// typeof
typeof "string"; // will tell you the data type
typeof variable; 

// String indices
- strings are indexed
- c h i c k e n
- 0 1 2 3 4 5 6 
- Each char has a corresponding index
- every stirng has a property called length
- string.length
- which will give you the number of characters
- so do .length - 1 to get the last letter in the string
- use [] to access a location in the string
- let mySong = "Songs of the North";
- mySong[2]
- If you select an index that doesnt exist you will get undefined
- Cannot change a character inside a string. 
- Strings are immutable - we must create a new string

// String methods
- methods are actions that can be pefromed on or with that particular string
- We can do things like:
   → Searching within a string
   → Replacing parts of a string
   → Changing case (upper\loser_
- They all follow this format:
   → thing.method()
   → make sure you use the () on methods. properties do not have the parens
- Examples
   → .toUpperCase()
   → .toLowerCase()
   → .trim() // removes whitespace
      ⇒ Only removes leading and trailing spaces
- We can chain methods
   → myString.trim().toUpperCase();

// More string methods - arguments!
- Some methods accept arguments that modify their behavior. 
- We pass them inside the parentheses
- thing.method(args);
- indexOf();
   → let tvShow = 'catdog';
   → tvShow.indexOf('cat'); // returns index 0
   → tvShow.indexOf('dog'); // returns index 3
   → tvShow.indexOf('z'); // returns -1 which means not found
   → case is important
- slice()
   → takes slices of an existing string 
   → myString.slice(4); // will return a string starting at index 4 to the end
   → myString.slice(0,5) // will return the part of the string between 0 and 5
      ⇒ NOTE: the 5 part is not indexed at 0, it is counting numbers starting at 1
- replace()
   → myString.replace("whatToReplace", "whatToReplaceWith");
   → Note that this will only replace the first occurance - use regex to replace all

// String escape characters
- \n newline
- \' single quote
- \" double quote
- \\ backslash
- \t tab
- \v vertical tab
- \f form feed

// string template literals
- strings that allow embedded expressions which will be evaluated and turned into a string
- let myVariable = "awesome";
- `This is a ${myVariable} string`' // This is an awesome string
- Uses backticks
- ${} // This will evaluate to something. We can put in a variable or an expression
- now we no longer have to use ugly concatenation strings - we can just interpolate the data

// Null and Undefined
- both are primitives
- Null
   → Intentional absence of any value
   → must be assigned
- Undefined
   → Variables that do not have an assigned value

// the math object and random numbers
- contains properties and methods for mathematical constants and functions
- Properties
   → Math.PI
   → Math.E
- Methods
   → Math.floor(3.657) // this will chop off the decimal
   → Math.round(4.6) // This will round up to 5
   → Math.pow(7,2) // Will take 7 and raise to the second power
   → Math.random() // generates random number between 0 and 1 non-inclusive
- Most common way to create a random number
   → Math.floor(Math.random() * 10) + 1
   → This will give us a random number between one and 10

// typeof operator
- determine the type of a given value
- syntax:
   → typeof myVariable; // whatever the variable holds
   → typeof 99; // will tell us it's "number"
   → typeof null; // this returns object for some reason. It was a mistake
- note that typeof is an operator, not a function or method
- It is considered a unary operator and only has one operand

// parseInt and parseFloat
- use to parse strings into numbers 
- watch out for NaN
- syntax:
   → parseInt('24'); //24
   → parseInt('24.987') // 24 - will stop at the deciman which is the first 'character'
   → parseInt('28DaysLater'); // 28 - will stop at the first 'character' it sees
   → parseFloat('24.987') // 24.987
   → parseFloat('7') // 7
   → parseFloat('i ate 3 shrimp') // NaN - it doesn't start with a parseable number
