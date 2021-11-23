# Handling errors

- Express has a default error handler and will respond with html and a 500 status code
- We can throw errors ourselves
  `throw new Error("Error details")`

## Defining custom error handlers

- We use four arguments instead of three
- (err, req, res, next)
  - if we define this signature it will be treated as an error handler
  - put it last after app.use and route calls
  - We can call next(err) to pass it back to the internal handler

```js
app.use((err, req, res, next) => {
  console.log();
  console.log("***************************************************");
  console.log("*********************ERROR*************************");
  console.log("***************************************************");
  // This will pas it back through to Express's internal handling
  next(err);
});
```

## Custom error class

- Common client responses
  - 404 - not found
  - 500 - Server error
  - 401 - Not authorized
  - 403 - Not allowed

## Creating a custom class

- Create an AppError.js file

```js
class AppError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = AppError;
```

- Require it in the app and use it to throw errors to the handler

```js
const AppError = require("./AppError.js");

const checkPassword = (req, res, next) => {
  const password = req.query.password;
  if (password === "chicken") {
    return next();
  }
  throw new AppError("Password Required", 401);
};
```

- Grab data from the error to use in the handler

```js
app.use((err, req, res, next) => {
  // Give a default value when destructuring
  const { status = 500, message = "Basic error message" } = err;
  console.log(status);
  res.status(status).send("Problem");
});
```

## Using it in a route

```js
// Basic handling an error in the async function
const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
if (!rows.length) {
  // we must call next manually and return out of the route to stop processing
  return next(new AppError("That campground no longer exists", 404));
}
```

## Setting up a try and catch block

- async functions can use a try\catch around them to handle errors

```js
// POST /campgrounds (create)
app.post("/campgrounds", async (req, res, next) => {
  const details = req.body.campground;
  const newCamp = new Campground(
    null,
    details.title,
    details.image,
    parseFloat(details.price),
    details.description,
    details.location
  );
  try {
    const result = await newCamp.save();
    res.redirect(`/campgrounds/${result[0].insertId}`);
  } catch (e) {
    next(e);
  }
});
```

- next() the error to the next function to be handled

## Setting up a helper function to deal will ALL uncaught errors

- configure a wrapper function that accepts a function as an argument and returns another function that nexts any errors

```js
// This should be in a helper file in the util folder
function catchAsyncErrors(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}
```

- Then all the try\catch blocks can be removed and the whole function gets wrapped with the async wrapper

```js
app.get(
  "/campgrounds",
  catchAsyncErrors(async (req, res, next) => {
    const [rows, metadata] = await Campground.getAllCampgrounds();
    res.render("campgrounds/index", { campgrounds: rows });
  })
);
```

- NOTE = Express 5 will have built in handling. This will no longer be necessary.

## Database errors

- handling specific errors can be done by creating helper functions that look for specific data in the error

```js
// Helper function for constraints
const handleConstraintError = (err) => {
  return new AppError("One or more fields was missing", 400);
};
```

```js
app.use((err, req, res, next) => {
  // Test for mysql verbiage when a field was violated. Will get a special message to send back from the above helper function
  if (err.message.includes("CONSTRAINT")) err = handleConstraintError(err);

  // Anatomy of an error (taken from MDN docs but some fields don't seem to be used by v8)
  console.log(err.name); // got this
  console.log("-----------------------------------------------------");
  console.log(err.message); // got this
  console.log("-----------------------------------------------------");
  console.log(err.description);
  console.log("-----------------------------------------------------");
  console.log(err.number);
  console.log("-----------------------------------------------------");
  console.log(err.stack); // got this
  console.log("-----------------------------------------------------");
  console.log(err.fileName);
  console.log("-----------------------------------------------------");
  console.log(err.lineNumber);
  console.log("-----------------------------------------------------");
  console.log(err.columnNumber);
  console.log("-----------------------------------------------------");

  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});
```
