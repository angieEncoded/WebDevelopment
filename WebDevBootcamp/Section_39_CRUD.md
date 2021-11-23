# Setting up campgrounds CRUD

## Javascript routes

```js
// Campgrounds routes - learning new async syntax
/* -------------------------------------------------------- */
// GET /campgrounds (index)
app.get("/campgrounds", async (req, res) => {
  const [rows, metadata] = await Campground.getAllCampgrounds();
  res.render("campgrounds/index", { campgrounds: rows });
});

// GET /campgrounds/new (display form)
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// POST /campgrounds (create)
app.post("/campgrounds", async (req, res) => {
  const details = req.body.campground;
  const newCamp = new Campground(
    null,
    details.title,
    parseFloat(details.price),
    details.description,
    details.location
  );

  const result = await newCamp.save();
  res.redirect(`/campgrounds/${result[0].insertId}`);
});

// GET /campgrounds/:id/edit (display form)
app.get("/campgrounds/:id/edit", async (req, res) => {
  const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
  res.render("campgrounds/edit", { campground: rows[0] });
});

// PATCH /campgrounds/:id
app.put("/campgrounds/:id", async (req, res) => {
  let campground = req.body.campground;
  console.log(campground);
  const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
  const updatedCampground = new Campground(
    rows[0].id,
    campground.title,
    Number(campground.price),
    campground.description,
    campground.location
  );
  await updatedCampground.update();
  res.redirect(`/campgrounds/${rows[0].id}`);
});

// GET /campgrounds/:id (show)
app.get("/campgrounds/:id", async (req, res) => {
  const [rows, metadata] = await Campground.getCampgroundByID(req.params.id);
  // console.log(rows); // Remember to pull the first item from the array
  res.render("campgrounds/show", { campground: rows[0] });
});

// DELETE /campgrounds/:id (delete)
app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.deleteById(id);
  res.redirect("/campgrounds");
});

/* -------------------------------------------------------- */
```

## index.ejs SHOW file

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yelpcamp Campgrounds</title>
  </head>
  <body>
    <h1>All Campgrounds</h1>
    <a href="/campgrounds/new"><button>Create New Campground</button></a>
    <ul>
      <% for (let campground of campgrounds) { %>
      <li>
        <%= campground.title %> -
        <a href="/campgrounds/<%= campground.id %>">See this campground</a>
      </li>
      <% } %>
    </ul>
  </body>
</html>


```

## new.ejs CREATE form

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yelpcamp Campgrounds</title>
  </head>
  <body>
    <h1>New Campground</h1>

    <form action="/campgrounds" method="POST">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="campground[title]" />
      </div>

      <div>
        <label for="price">Price</label>
        <input
          type="number"
          id="price"
          name="campground[price]"
          value="10.00"
          placeholder="10.00"
          step=".01"
        />
      </div>

      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          name="campground[description]"
          rows="20"
          cols="50"
        ></textarea>
      </div>

      <div>
        <label for="location">Location</label>
        <input type="text" id="location" name="campground[location]" />
      </div>
      <button>Add campground</button>
    </form>
  </body>
</html>
```

## show.ejs SHOW form

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yelpcamp Campgrounds</title>
  </head>
  <body>
    <h1>Show single campground</h1>

    <p><%= campground.title %> - <%= campground.id %></p>
    <p><%= campground.location %></p>
    <p><%= campground.description %></p>
    <a href="/campgrounds/<%= campground.id%>/edit">Edit this campground</a>
    <form
      action="/campgrounds/<%= campground.id %>?_method=DELETE"
      method="POST"
    >
      <button>Delete this campground</button>
    </form>

    <a href="/campgrounds">Return to all campgrounds</a>
  </body>
</html>
```

## edit.ejs EDIT form

```ejs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yelpcamp Campgrounds</title>
  </head>
  <body>
    <h1>Edit Campground</h1>

    <form action="/campgrounds/<%= campground.id %>?_method=PUT" method="POST">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="campground[title]"
          value="<%= campground.title %>"
        />
      </div>

      <div>
        <label for="price">Price</label>
        <input
          type="number"
          id="price"
          name="campground[price]"
          value="10.00"
          placeholder="10.00"
          step=".01"
          value="<%= campground.price %>"
        />
      </div>

      <div>
        <label for="description">Description</label>
        <textarea
          id="description"
          name="campground[description]"
          rows="20"
          cols="50"
        >
<%= campground.description %></textarea
        >
      </div>

      <div>
        <label for="location">Location</label>
        <input
          type="text"
          id="location"
          name="campground[location]"
          value="<%= campground.location %>"
        />
      </div>

      <button>Update campground</button>
    </form>

    <a href="/campgrounds/<% campground.id %>">Back to the campground</a>
  </body>
</html>
```
