const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/meals", mealsRouter);

module.exports = app;
