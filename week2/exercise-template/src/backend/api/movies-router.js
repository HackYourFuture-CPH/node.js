const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
    let beginYear = parseInt(request.query.beginYear);
    let endYear = parseInt(request.query.endYear);
    let minRating = parseFloat(request.query.minRating);

    beginYear = beginYear > 0 ? beginYear : 0;
    endYear = endYear < Number.POSITIVE_INFINITY ? endYear : Number.POSITIVE_INFINITY;
    minRating = minRating > 0 ? minRating : 0;

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
