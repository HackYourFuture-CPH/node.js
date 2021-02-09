const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await db("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
