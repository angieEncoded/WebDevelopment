# Validating incoming data

## In the browser

- We can use bootstrap to easily do form validation
- add required to all the inputs
- add novalidate to the form itself so that the browser won't try to validate
- add the javascript snippet and adjust as needed

```ejs
 <form action="/campgrounds" method="POST" class="validateForm" novalidate>
      <div class="mb-3">
        <label class="form-label" for="title">Title</label>
        <input class="form-control" type="text" id="title" name="campground[title]" required/>
        <div class="valid-feedback">Complete</div>
      </div>
</form>
```

```js
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".validateForm");

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
```

## Using Joi to validate forms

- Set up a validation schema in a separate file under util (or wherever)

```js
const Joi = require("joi");

module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});
```

- include the file in the route handler

```js
const { campgroundSchema } = require("./util/ValidationSchemas");
```

- Create a function that calls out to the schema

```js
// Function to validate campgrounds. Reaches out to /util/ValidationSchema to get the
// pattern to match
const validateCampgrounds = (req, res, next) => {
  // Deal with validation using Joi (new, no longer using express-validator)
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const message = error.details.map((element) => element.message).join(",");
    throw new AppError(message, 400);
  } else {
    next();
  }
};
```

- Call the middleware in the route

```js
app.post(
  "/campgrounds",
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
```

## Move it further out to get everything out of the app.js fil

ValidateCampgrounds.js

```js
const { campgroundSchema } = require("./ValidationSchemas");
const AppError = require("./AppError");
// Function to validate campgrounds. Reaches out to /util/ValidationSchema to get the
// pattern to match
const validateCampgrounds = (req, res, next) => {
  // Deal with validation using Joi (new, no longer using express-validator)
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const message = error.details.map((element) => element.message).join(",");
    throw new AppError(message, 400);
  } else {
    next();
  }
};

module.exports = validateCampgrounds;
```

- ValidationSchema.js

```js
const Joi = require("joi");

module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});
```

- app.js

```js
const validateCampgrounds = require("./util/ValidateCampgrounds");

app.post(
  "/campgrounds",
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
```
