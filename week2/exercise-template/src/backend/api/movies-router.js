const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
    let beginYear = parseInt(request.query.beginYear) > 0 ?
        parseInt(request.query.beginYear) :
        0;
    let endYear = parseInt(request.query.endYear) < Number.POSITIVE_INFINITY ?
        parseInt(request.query.endYear) :
        Number.POSITIVE_INFINITY;
    let minRating = parseInt(request.query.minRating) > 0 ?
        parseInt(request.query.minRating) :
        0;

    let validMovies = movies.filter(
        movie => movie.year >= beginYear &&
            movie.year <= endYear &&
            movie.rating >= minRating
    );
    response.send({ data: validMovies });
});

router.get("/:year", async (request, response) => {
    response.send({ data: movies.filter(
        movie => movie.year === parseInt(request.params.year))
    });
});

module.exports = router;
