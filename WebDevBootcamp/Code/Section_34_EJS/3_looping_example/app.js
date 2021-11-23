const express = require("express");
const app = express();
require("dotenv").config();
// ejs standard setup
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const cats = ["Babs", "Calico", "Yaya", "Rory"];
  res.render("home", { title: "Home", cats });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
