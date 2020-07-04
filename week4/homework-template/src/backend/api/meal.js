const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/:id", async (request, response) => {
  try {

  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {

});

module.exports = router;
