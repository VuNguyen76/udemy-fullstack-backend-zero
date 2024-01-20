require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/wed");
const app = express();
const port = process.env.PORT || 8888; //port => hard code . uat .pord
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// Define routes
app.use("/", wedRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
