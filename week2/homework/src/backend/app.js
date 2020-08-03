const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});

module.exports = app;
