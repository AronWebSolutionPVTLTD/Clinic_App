const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const connection = require("./connection");
const allroutes = require("./routes/allRoutes");
app.use(express.json());

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    console.log(err);
    return;
  }

  console.log("Connected to MySQL database");
});
app.use("/api", allroutes);

app.listen(PORT, () => console.log(`Connect to Port${PORT}`));
