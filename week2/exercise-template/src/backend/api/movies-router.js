const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(movies);
  response.send({ data: [] });
});

module.exports = router;
