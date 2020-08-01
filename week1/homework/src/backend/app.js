const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");

app.get("/", (req, res, next) => {
  res.send("asd");
});

module.exports = app;
