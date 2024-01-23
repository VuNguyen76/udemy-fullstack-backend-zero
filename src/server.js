require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/wed");
const connection = require("./config/dataBase");
const { table } = require("console");
const { name } = require("ejs");
const app = express();
const port = process.env.PORT || 8888; //port => hard code . uat .pord
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
//config template engine
configViewEngine(app);

// Define routes
app.use("/", wedRoutes);

//test connection

//simple queiry
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  // console.log(">>>results: ", results);
  // console.log(">>>fields: ", fields);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
