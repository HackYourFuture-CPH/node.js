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

router.get("/:id", async (request, response) => {
    const moviesWithId = movies.filter(
        movie => movie.id === parseInt(request.params.id)
    );
    const movieWithId = moviesWithId[0] ? moviesWithId[0] : {};
    response.send({ data: movieWithId });
});

module.exports = router;
