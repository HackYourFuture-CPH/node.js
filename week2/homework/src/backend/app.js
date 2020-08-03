const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});

app.get("/", async (request, response) => {
    response.send(meals);
});

module.exports = app;
