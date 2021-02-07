const movies = require("./src/backend/data/movies.json");
movies.map( (movie, index) => movie.id = index + 1 );

const fs = require('fs');

fs.writeFile('./src/backend/data/movies_with_ids.json', JSON.stringify(movies), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});