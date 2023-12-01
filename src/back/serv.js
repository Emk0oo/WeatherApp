const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 3000;
const dotenv = require("dotenv").config();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
