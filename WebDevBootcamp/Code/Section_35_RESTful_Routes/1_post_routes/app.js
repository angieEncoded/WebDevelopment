const express = require("express");
const app = express();
require("dotenv").config();
// ejs standard setup
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "")));

// This tells express to parse form data
app.use(express.urlencoded({ extended: true }));

// This tells express to parse json data
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
  //res.render("home.ejs", { title: "home" });
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { meat, number } = req.body;
  res.send(`Here are your ${number} ${meat} tacos!`);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
