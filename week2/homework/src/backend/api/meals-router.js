const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
