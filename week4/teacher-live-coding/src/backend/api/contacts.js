const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("contacts");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    console.log(response.body);
    // This could be insecure!!
    const insertedContact = await knex("contacts").insert(response.body);
    response.json(insertedContact);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
