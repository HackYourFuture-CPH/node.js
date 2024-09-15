// List Movies
function listMovies(favoriteMovies) {
    return favoriteMovies;
}

// Add Movie
function addMovie(favoriteMovies, movieName, movieScore) {
    const newMovie = {
        id: favoriteMovies.length + 1,
        movieName: movieName,
        dateAdded: new Date().toISOString().split('T')[0],
        score: parseInt(movieScore)
    };
    favoriteMovies.push(newMovie);
    return newMovie;
}

// Update Movie
function updateMovie(favoriteMovies, id, newName, newScore) {
    const movieIndex = favoriteMovies.findIndex(movie => movie.id === id);
    if (movieIndex !== -1) {
        favoriteMovies[movieIndex].movieName = newName;
        favoriteMovies[movieIndex].score = parseInt(newScore);
        return favoriteMovies[movieIndex];
    }
    return null;
}

// Delete Movie
function deleteMovie(favoriteMovies, id) {
    const movieIndex = favoriteMovies.findIndex(movie => movie.id === id);
    if (movieIndex !== -1) {
        return favoriteMovies.splice(movieIndex, 1)[0];
    }
    return null;
}

// Read Movie
function readMovie(favoriteMovies, id) {
    return favoriteMovies.find(movie => movie.id === id);
}

export { listMovies, addMovie, updateMovie, deleteMovie, readMovie };