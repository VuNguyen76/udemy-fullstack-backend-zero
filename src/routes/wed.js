const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World& Nodemon!");
});

router.get("/abc", (req, res) => {
  res.send("Check ABC");
});

router.get("/hoidanit", (req, res) => {
  // Render an EJS template named "sample.ejs" (corrected typo)
  res.render("sample.ejs");
});
module.exports = router;
