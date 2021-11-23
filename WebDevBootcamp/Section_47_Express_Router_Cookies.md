# Section 47 Express Router and cookies

## Express Router

- This is a way to break routes out from the main app.js file
- We create a routes folder and then create individual js files to contain the routes

```js
const express = require("express");
const router = express.Router();
const Campground = require("../models/Campground.js");
const catchAsyncErrors = require("../util/catchAsyncErrors");
const validateCampgrounds = require("../util/ValidateCampgrounds");

router.get(
  "/",
  catchAsyncErrors(async (req, res, next) => {
    const [rows, metadata] = await Campground.getAllCampgrounds();
    res.render("campgrounds/index", { campgrounds: rows });
  })
);

// GET /campgrounds/new (display form)
router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

// POST /campgrounds (create)
router.post(
  "/",
  validateCampgrounds,
  catchAsyncErrors(async (req, res, next) => {
    const details = req.body.campground;
    const newCamp = new Campground(
      null,
      details.title,
      details.image,
      parseFloat(details.price),
      details.description,
      details.location
    );
    const result = await newCamp.save();
    res.redirect(`/campgrounds/${result[0].insertId}`);
  })
);

// GET /campgrounds/:id/edit (display form)
router.get(
  "/:id/edit",
  catchAsyncErrors(async (req, res, next) => {
    const [rows, metadata] = await Campground.getCampgroundByID(
      Number(req.params.id)
    );
    res.render("campgrounds/edit", { campground: rows[0] });
  })
);

// PATCH /campgrounds/:id
router.put(
  "/:id",
  validateCampgrounds,
  catchAsyncErrors(async (req, res, next) => {
    let campground = req.body.campground;
    const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
    const updatedCampground = new Campground(
      rows[0].id,
      campground.title,
      campground.image,
      Number(campground.price),
      campground.description,
      campground.location
    );
    await updatedCampground.update();
    res.redirect(`/campgrounds/${rows[0].id}`);
  })
);

// GET /campgrounds/:id (show)
router.get("/:id", async (req, res, next) => {
  const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
  if (!rows.length) {
    return next(new AppError("That campground does not exist", 404));
  }
  res.render("campgrounds/show", { campground: rows[0] });
});

// DELETE /campgrounds/:id (delete)
router.delete(
  "/:id",
  catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    await Campground.deleteById(id);
    res.redirect("/campgrounds");
  })
);

module.exports = router;
```

- Then we can call app.use in the main app.js file.
- We will use the

```js
// Routes - we can use the pattern prefix in this place so we don't have to use it in the route file
app.use("/campgrounds", camgroundRoute);
```

## Middleware

- We can protect individual routes with middleware that checks auth for example

```js
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send(
      "Sorry, my middleware fake auth is preventing you from getting through - use ?isAdmin=true at the end of the url to get in!"
    );
  }
});
```

## Cookies

- What are cookies
  - Browser can store bits of information and set things based on it
  - We can send a key-value pair back to the browser to describe the 'state'
  - things like shopping carts, etc
  - we can personalize things
  - We can also do tracking... but we shouldn't!
- How to send a cookie

  - express has a res.cookie() method
  - cookies can have expirations, but we can manage this stuff with sessions

- Basic cookie

```js
// We can send a cookie with res.cookie() method
app.get("/setname", (req, res, next) => {
  res.cookie("name", "Bablet");
  res.cookie("Animal", "Cat");
  res.send("Ok, sent the cookie");
});
```

## Parsing cookies

- We will use a separate package - cookie-parser to read the cookies
- install it `npm install cookie-parser`
- require it `js const cookieParser = require("cookie-parser");`
- use it `js app.use(cookieParser());`
- Then we have access to req.cookies in the routes where we can see cookies and do things based on them
- for example we can greet a user by name

```js
app.get("/greet", (req, res, next) => {
  const { name = "anonymous" } = req.cookies;
  console.log(req.cookies);
  res.send(`Hey there, ${name}`);
});
```

## Signing cookies

- Why do we do it?
  - We want to verify the integrity of a resource
  - prove the cookie wasn't tampered with
  - it's not about hiding the data
- if we look in req.cookies, we won't see the signed cookie
- we need to look in another place - req.signedCookies
  - This is to make it clear was was signed and what was unsigned

```js
// Using signed cookies
app.get("/getsignedcookie", (req, res, next) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Okay, signed the cookie");
});

app.get("/verifyfruit", (req, res, next) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  // res.send(req.cookies);
  res.send(req.signedCookies);
});
```

- If anyone tampers with that cookie it won't appear in the signedCookies anymore
- We can tamper with it in the dev tools under Application -> Storage -> Cookies to prove that out
- It won't appear at all if there is no 'signed' format, and it will show as false if there is a 'signed' format that doesn't decrypt to our secret
- if we ever change the secret, all the existing cookies will be invalid

## HMAC signing

- Hash-based message authentication code
  - goal is to verify the data integrity and the authenticity of a message
- Helpful site for visualizing hashing
  `https://freeformatter.com/`
- When a cookie comes in, the hashed part is extracted, the cookie value is extracted, and it's rehashed and compared to what the value should be
- it's not decrypted, it's re-encrypted(resigned) and compared
