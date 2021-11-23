const express = require("express");
const app = express();
require("dotenv").config();
const { v4: getUniqueID } = require("uuid");
// ejs standard setup
const path = require("path");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "")));

// This tells express to parse form data
app.use(express.urlencoded({ extended: true }));

// This tells express to parse json data
app.use(express.json());

// This is needed to process PATCH and PUT request
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  { id: "sdgsfdgdsgdfsg", username: "Leo", comment: "Sounds fine to me." },
  {
    id: "yurtugbghj",
    username: "lumber",
    comment: "Purple, black , and gold seems like a good combo?",
  },
  {
    id: "iuojjklklh",
    username: "josie",
    comment: "I love brown and silver tabby cats.",
  },
  { id: "kjiolkjlkjh", username: "asuna", comment: "I am a raid leader!" },
];

/* RESTFUL ROUTING AND CRUD OPERATIONS */
// GET /bozja - list all events
// POST /bozja - create a new bozja event
// GET /bozja/:id - get one event using id
// PATCH /bozja/:id - update one event using the id
// DELETE /bozja/:id - delete one event
/* ----------------------------------- */

// Base names for the template files
// index - display all
// new - form to create a new item
// create creates the new item on the server
// show - details for one specific item
// edit - form to edit a specific entry
// update - updates specific item on the server
// destroy - deletes specific item on the server

// Get all comments
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments, title: "Show comments" });
});

// Serve the form for a new comment
app.get("/comments/new", (req, res) => {
  res.render("comments/new", { title: "New comments" });
});
// post a new comment
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: getUniqueID() });
  res.redirect("/comments");
});

// Show an individual comment
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  // data coming from req.params is a string. parse int if the id is a number
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment, title: "Showing comment" });
});

// Show the update comments form
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("comments/edit", {
    title: "Editing comment",
    comment: foundComment,
  });
});

// update a comment
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

// Delete a comment
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});
/* ----------------------------------------------------*/

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("*", (req, res) => {
  res.render("unknown", { title: "Page doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
