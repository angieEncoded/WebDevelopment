// module.exports
- This is how we include our own files
- Several different ways to export data from one of our own files:

// module.exports is an object and by default exports an empty object
// We can add things individually in this way:
module.exports.add = add;
module.exports.square = square;

// Another way is to define an object and then export that
const math = {
    add:add,
    square: square
}
module.exports = math;

// Add them directly onto the module.exports
module.exports.add = (x,y) => {return x+y};
module.exports.square = (x,y) => {return x*x};

// Shortcut syntax
exports.add = add;
exports.square = square;

// Requiring a directory
- We can create a directory with any number of javascript files in it
- create an index.js that gathers all the require statements for the files into one
- and then we can gather those into an array and export them at once
- We can include that directory from other files and node will automatically look for an index.js file

// babs.js file
module.exports = {
    name:'Bablet',
    color: 'Brown Tabby'
}

// index.js file
const babs = require('./babs')
const yaya = require('./yaya')
const calico = require('./rory')
const rory = require('./calico')
const allcats = [babs, yaya, calico, rory]
module.exports = allcats;

// app.js file
const mymath = require('./math.js');
const sheltercats = require('./shelter')
console.log(sheltercats[0].name)

// NPM - Node Package Manager
- Installing packages
   → npm install packagename
   → npm i packagename
- packagelock.json is a 'record' of all the files in the node_modules directory
- Then we can require these packages
- const varible = require('packagename')
   → node will automatically look in node_modules

// Adding global packages
- npm install in the way we were doing it installed for use in that one app
- npm i -g packagename
- npm link packagename
   → this will make a link in the local node_modules to the global package


// package.json
- metadata about the project\application
- How we normally create it is with an npm command
   → create a new directory for the project
   → npm init
   → answer the questions

// use case for the package.json file
- the node_modules folder typically isn not shared
- package.json describes what a user of the code needs to install
- 

