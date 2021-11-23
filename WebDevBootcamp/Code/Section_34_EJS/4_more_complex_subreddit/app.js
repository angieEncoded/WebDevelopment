const express = require("express");
const app = express();
require("dotenv").config();
const subData = require("./data.json");
// ejs standard setup
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = subData[subreddit];
  if (!data) {
    res.render("notfound");
    return;
  }
  res.render("subreddit", { ...data });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
