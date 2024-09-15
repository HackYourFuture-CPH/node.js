// Array simulating a database of favorite movies
const favoriteMovies = [
    { id: 1, movieName: "The Shawshank Redemption", dateAdded: "2024-09-07", score: 5 },
    { id: 2, movieName: "Inception", dateAdded: "2024-09-08", score: 4 },
    { id: 3, movieName: "Pulp Fiction", dateAdded: "2024-09-09", score: 5 },
    { id: 4, movieName: "The Dark Knight", dateAdded: "2024-09-11", score: 4 },
    { id: 5, movieName: "Forrest Gump", dateAdded: "2024-09-13", score: 3 }
];

// List Movies
function listMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '<ul>' + favoriteMovies.map(movie => 
        `<li>ID: ${movie.id}, Name: ${movie.movieName}, Date Added: ${movie.dateAdded}, Score: ${movie.score}</li>`
    ).join('') + '</ul>';
}

// Add Movie
function addMovie(movieName, movieScore) {
    const newMovie = {
        id: favoriteMovies.length + 1,
        movieName: movieName,
        dateAdded: new Date().toISOString().split('T')[0],
        score: parseInt(movieScore)
    };
    favoriteMovies.push(newMovie);
    // listMovies();
}

// Update Movie
function updateMovie(id, newName, newScore) {
    const movieIndex = favoriteMovies.findIndex(movie => movie.id === id);
    if (movieIndex !== -1) {
        favoriteMovies[movieIndex].movieName = newName;
        favoriteMovies[movieIndex].score = parseInt(newScore);
        // listMovies();
    } else {
        alert('Movie not found');
    }
}

// Delete Movie
function deleteMovie(id) {
    const movieIndex = favoriteMovies.findIndex(movie => movie.id === id);
    if (movieIndex !== -1) {
        favoriteMovies.splice(movieIndex, 1);
        // listMovies();
    } else {
        alert('Movie not found');
    }
}

// Read Movie
function readMovie(id) {
    const movie = favoriteMovies.find(movie => movie.id === id);
    const resultDiv = document.getElementById('readMovieResult');
    if (movie) {
        resultDiv.innerHTML = `
            <strong>ID:</strong> ${movie.id}<br>
            <strong>Name:</strong> ${movie.movieName}<br>
            <strong>Date Added:</strong> ${movie.dateAdded}<br>
            <strong>Score:</strong> ${movie.score}
        `;
    } else {
        resultDiv.innerHTML = 'Movie not found';
    }
}

// Event Listeners
document.getElementById('addMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addMovie(
        document.getElementById('newMovieName').value,
        document.getElementById('newMovieScore').value
    );
    this.reset();
});

document.getElementById('updateMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    updateMovie(
        parseInt(document.getElementById('updateMovieId').value),
        document.getElementById('updateMovieName').value,
        document.getElementById('updateMovieScore').value
    );
    this.reset();
});

document.getElementById('deleteMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    deleteMovie(parseInt(document.getElementById('deleteMovieId').value));
    this.reset();
});

document.getElementById('readMovieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    readMovie(parseInt(document.getElementById('readMovieId').value));
    this.reset();
});

// Initial list display
        // listMovies();