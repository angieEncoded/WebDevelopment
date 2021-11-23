# The call stack

## Helpful sites

<http://latentflip.com/loupe/>

## The Call Stack

- Javascript keeps track of its place in the stack.
  - Last thing in, first thing out
    - How it works:
    - When a function is called the interpreter adds it to the stack
    - The function is then called
    - Additional functions are added as they are called
    - When the current function is done, it comes off the stack and JS continues where it was
- Use the chrome debugger on the sources tab to debug
  - Click the line number to stop execution and step through the script

## Single Threaded

- One thread running one line, period
  - Requests can take a lot of time
  - JS hands things off to the browser to deal with
  - When the browser is done, it puts it back on the stack as a callback

## Callback Hell

- This nesting pattern makes it hard to see what is happening

```js
// node test.js
setTimeout(() => {
  console.log("One seconds has passed!");
  setTimeout(() => {
    console.log("Two seconds has passed!");
    setTimeout(() => {
      console.log("Three seconds has passed!");
      setTimeout(() => {
        console.log("Four seconds has passed!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

- if we want to take things out into our own function it gets worse - but this is a common pattern

```js
// create a generic function that takes in some text, how long, and a callback to execute after its done
const delayedText = (text, seconds, callback) => {
  setTimeout(() => {
    console.log(`${text}`);
    callback && callback(); // test if it the callback was sent in
  }, seconds);
};

// And now we would call that function several times, nesting it as a callback each time
delayedText("One second has passed", 1000, () => {
  delayedText("Two seconds have passed", 1000, () => {
    delayedText("Three second have passed", 1000, () => {
      delayedText("Four seconds have passed", 1000, () => {});
    });
  });
});
```

- often we will have more than one callback - one for pass and one for fail
- This leads to very messy code

## Promises

- An object that represents an eventual completion\failure of an async operation
- This helps to solve the problem of the nested hell
- Promises are new and not supported in IE
- Stages
  - Pending
  - Resolved
  - Rejected
- Callbacks are attached to the promise object itself instead of passed into the function

```js
myPromise()
  .then((results) => {
    console.log("First thing worked");
    return SomeOtherPromise;
  })
  .then((results) => {
    console.log("Second thing worked and I'm done.");
  })
  .catch((error) => {
    console.log("Failure");
  });
```

## Creating promises

```js
const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    // Send a resolution after 3 seconds
    setTimeout(() => {
      if (rand < 0.7) {
        resolve(`Number was ${rand} and promise was resolved`);
      }
      reject(`Number was ${rand} and promise was rejected`);
    }, 1000);
  });
};

fakeRequest()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
```

## async functions

- another improvement over the old callback hell
- it's syntactic sugar for promise
- there are two pieces
  - async
    - Async functions always return a pro ise
    - if a value comes back, the 'promise' is resolved with that value
    - if there is an exception, then the promise is rejected
    - if we declare a function as async, which we do by preceding it with the async keyword, it automatically returns a promise
    - throw an error from inside the function to trigger the rejection
  - await
    - allows us to write async code that looks synchronouse
    - this will pause the execution and wait for the promise to finish

```js
// declare a function as async
const sing = async () => {
  const rand = Math.random();
  if (rand < 0.2) {
    // several ways to throw an error
    // throw "Just some string to send through"
    // Constructor syntax
    throw new Error(`The promise was REJECTED because rand was ${rand}`);
  }
  return `The promise was RESOLVED! because rand was ${rand}`;
};

// call it like we would any other promise
sing()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
```

- another example

```js
const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "sdfa") return "Welcome to the function";
  throw "Invalid Password";
};

login("user", "sdfa")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));
```

```js
// function that returns a promise
const delayedResponse = (seconds) => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      if (rand < 3) {
        resolve(`RESOLVED - Rand was ${rand}`);
      } else {
        reject(`REJECTED - Rand was ${rand}`);
      }
    }, seconds);
  });
};

// async function to call that promise in sequence
async function muchText() {
  await delayedResponse(2000)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
  await delayedResponse(1000)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
  await delayedResponse(3000)
    .then((results) => console.log(results))
    .catch((error) => console.log(error));
  return "all done!";
}

//
muchText().then((results) => console.log(results));
```

- another example

```js
const delayedResponse = (seconds) => {
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      if (rand < 3) {
        resolve(`RESOLVED - Rand was ${rand}`);
      } else {
        reject(`REJECTED - Rand was ${rand}`);
      }
    }, seconds);
  });
};

async function getDelayedResponse() {
  try {
    let result = await delayedResponse(2000);
    console.log(result);
    let result2 = await delayedResponse(1000);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

getDelayedResponse();
```
