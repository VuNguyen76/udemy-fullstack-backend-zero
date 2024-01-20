const express = require("express");
const path = require("path");

const app = express();
const port = 8081;

// Configure template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check ABC");
});

app.get("/hoidanit", (req, res) => {
  // Render an EJS template named "sample.ejs" (corrected typo)
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
