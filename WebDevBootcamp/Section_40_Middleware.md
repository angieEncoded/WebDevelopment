# Middleware

- functions that run during the request\response lifecycle
  - Request comes in
  - Middleware runs
  - Main code runs
  - Response goes back out
- Every middleware has access to the request and response objects
- can end the HTTP request with a res.send()
- can be chained by calling next()
- app.use is a place we can dump middleware functions

ex.

```js
const morgan = require("morgan");
app.use(morgan("tiny"));
```

- This will be used by every single incoming request

## anatomy of a request

| http method middleware applies to | Path it applies to | Middleware function | request argument (req) | response argument(res) | callback argument (next) |
| --------------------------------- | ------------------ | ------------------- | ---------------------- | ---------------------- | ------------------------ |
| app.get                           | ("/",              | function            | (req                   | res                    | next)                    |

## note that code WILL run after next() - but not necessarily where we expect it to

```js
app.use((req, res, next) => {
  console.log("First Middleware");
  next();
  console.log("First Middleware after calling next()"); // I run 'eventually'
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Third Middleware");
  next();
});
```

- use return to prevent any further execution

```js
app.use((req, res, next) => {
  console.log("First Middleware");
  return next();
  console.log("First Middleware after calling next()"); // I run 'eventually'
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  return next();
});
app.use((req, res, next) => {
  console.log("Third Middleware");
  return next();
});
```

- app.use functions have to precede any routes - order matters

## decorating the request object

- We can use app.use in order to add other things to the request object, such as the request date

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  return next();
});

app.get("/", (req, res) => {
  console.log(`Request DATE: ${req.requestTime}`);
  res.send("got the route");
});

app.listen("8080");
```

- We can add middleware to particular routes instead of all

```js
app.use("/cats", (req, res, next) => {
  console.log("Cats rule!");
  next();
});
```

## defining a 404 error

- We can also use these at the end of the file to match any request that wasn't matched by a route

```js
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});
```

## fake authentication middleware demo

### One way to check a route

```js
// Set up a middleware to run on the route and check some condition
const checkPassword = (req, res, next) => {
  const password = req.query.password;
  if (password === "chicken") {
    return next();
  }
  return res.send("bad password");
};

// Route we are protecting
app.get("/secret", checkPassword, (req, res, next) => {
  res.send("You reached Calico's secret page!");
});
```

### the more common pattern - define a function then call that in the route itself

```js
// Our check password helper function
const checkPassword = (req, res, next) => {
  const password = req.query.password;
  if (password === "chicken") {
    return next();
  }
  return res.send("bad password");
};

// Route we are protecting
app.get("/secret", checkPassword, (req, res, next) => {
  res.send("You reached Calico's secret page!");
});
```
