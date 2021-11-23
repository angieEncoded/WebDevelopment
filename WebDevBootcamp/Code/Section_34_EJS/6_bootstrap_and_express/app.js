const express = require("express");
const app = express();
// ejs standard setup
const path = require("path");
const data = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const cats = data.cats;
  res.render("home", { cats: cats });
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // we can pass through an object for the template to use
  res.render("random", { number: randomNumber });
});

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});
