# Sessions

- This is how we add in statefulness to http
- server-side data store we use to keep track of a session
- why?
  - cookies have a max size
  - cookies also have a max number you can have on a domain
  - cookies are not as secure
- What happens
  - A small cookie is stored in the browser with the session id
  - the server can then look up that session in the database
  - then we have all the stored data we left in the db

## Using express-sessions

- install the middleware `npm install express-session`
- require it `const session = require("express-session"); `
- very basic use - `app.use(session({ secret: process.env.secret }));`
- now we can add anything we want to req.session and that will be stored in that session

```js
app.get("/viewcount", (req, res, next) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});
```

- This is only associated with this browser and this session
- a different browser would get a different session
- NOTE - right now it is being stored in memory. Default store is MemoryStore
  - This has an intentional memory leak
  - Meant for debugging
  - use a compatible session-store
- What is resave?
  - defaults to true
  - forces the session to be saved back to the session store even if there were no changes
- What is saveUninitialized?

  - forces an uninitialized session to be saved to the store - a new session that was unmodified
  - false is usedful for login sessions and reducing storage. Also for where you have to have permission before setting a cookie. Also helps with race conditions.

- set up the session

```js
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
```

- set up some routes to test

```js
app.get("/register", (req, res) => {
  const { username = "Anonymous" } = req.query; // expect a query string coming in
  console.log(username);
  req.session.username = username; // add that to the session
  console.log(req.session.username);
  res.redirect("/greet"); // redirect to prove our username is in the session
});

app.get("/greet", (req, res) => {
  console.log(req.session);
  const { username } = req.session;
  res.send(`Welcome back ${username}`);
});
```

## Intro to flash

- connect-flash stores messages
- idea is to flash a message to the user like success or fail with some information
- install it with `npm install connect-flash`
- require it in the app `const flash = require("connect-flash");`
- use it as a middleware `app.use(flash());`
- we normally put a flash on just before we redirect somewhere to flash the message

```js
app.get("/fakepost", (req, res, next) => {
  req.flash("info", "This is some information");
  req.flash("error", "There was a problem");
  req.flash("success", "Successfully did the thing!");
  res.redirect("/");
});
```

- and this way it's available for the next route to grab

```js
app.get("/", (req, res) => {
  res.render("home", { messages: req.flash("error") });
});
```

## Improving the flow

- Set up a middleware to handle it
- res.locals contains response variables scoped to the current request

```js
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});
```
