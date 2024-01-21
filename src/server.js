require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/wed");
const mysql = require("mysql2");
const { table } = require("console");
const { name } = require("ejs");
const app = express();
const port = process.env.PORT || 8888; //port => hard code . uat .pord
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// Define routes
app.use("/", wedRoutes);

//test connection
// Create a MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  port: "3307", //default:3306
  user: "root", //default: emty
  password: "123456",
  database: "hoidanit",
});

//simple queiry
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>>results: ", results);
  console.log(">>>fields: ", fields);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
