const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  // Configure template engine
  //console.log(">>>check__dirname:", path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //Config stactuc files
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
