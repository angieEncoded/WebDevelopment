const add = (x,y) => {return x+y};
const square = (x,y) => {return x*x};


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