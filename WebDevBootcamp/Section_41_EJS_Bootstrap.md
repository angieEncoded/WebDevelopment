# Layouts in ejs

## Using ejs-mate

- We can create a layout template and pass the content through to it
  - Create a layouts folder in the views directory
  - install ejs-mate
    `npm install ejs-mate`
  - require it in the app.js and set the engine

```js
const engine = require("ejs-mate");
app.engine("ejs", engine);
```

- then set up the boilerplate

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boilerplate</title>
</head>
<body>
    <!-- This is the insertion point -->
    <%- body %>


</body>
</html>
```

- Then run the layout function in each page you want to use this in

```ejs
<% layout('layouts/boilerplate') %>
```

## Creating partials

- Create a partials directory
- Create the .ejs file you want to put content in
- ex. navbar.ejs

```ejs
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Yelpcamp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/campgrounds">All Campgrounds</a>
        <a class="nav-link" href="/campgrounds/new">New Campground</a>
      </div>
    </div>
  </div>
</nav>

```
