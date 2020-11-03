const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
