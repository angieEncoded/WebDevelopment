const express = require("express");
const app = express();
require("dotenv").config();
//set up my current directory path stuff
const path = require("path");

// Set up the ejs stuff
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // we can pass through an object for the template to use
  res.render("random", { number: randomNumber });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
