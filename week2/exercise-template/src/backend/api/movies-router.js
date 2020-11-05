const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(request.query);
  const startYear = request.query.startYear
  response.send(`startYear is ${startYear}`);
});

router.get("/:year", async (request, response) => {
  console.log(request.params);
  if (!parseInt(request.params.year)) {
    response.send("Oops, looks like you didn't send a year");
  }
  // const requestedYear = parseInt(request.params.year);
  // const earliestMovieYear = Math.min(...movies.map( movie => movie.year ));
  // const latestMovieYear = Math.max(...movies.map( movie => movie.year ));
  // if (requestedYear < earliestMovieYear || requestedYear > latestMovieYear) {
  //   response.send(`We only have movies between ${earliestMovieYear} and ${latestMovieYear}. Please only request a movie between those years.`);
  // }
  const moviesAtSpecificYear = movies.filter( movie => movie.year === parseInt(request.params.year) );
  response.send(moviesAtSpecificYear);
});

module.exports = router;
