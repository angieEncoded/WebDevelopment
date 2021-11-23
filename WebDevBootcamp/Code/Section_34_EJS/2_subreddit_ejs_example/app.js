const express = require("express");
const app = express();
require("dotenv").config();
//set up my current directory path stuff
const path = require("path");

// Set up the ejs stuff
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit: subreddit });
});

app.listen(process.env.PORT, () => {
  console.log(`app started up on ${process.env.PORT}`);
});
