// List all movies
function listMovies() {
    fetch('/movies')
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '<ul>' + data.map(movie => 
                `<li>ID: ${movie.id}, Name: ${movie.movieName}, Date Added: ${movie.dateAdded}, Score: ${movie.score}</li>`
            ).join('') + '</ul>';
        })
        .catch(error => console.error('Error listing movies:', error));
}

// Add a new movie
function addMovie(movieName, movieScore) {
    console.log(movieName, movieScore);
    fetch('/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieName, movieScore }),
    })
        .then(response => response.json())
        .then(data => console.log('Added movie:', data))
        .catch(error => console.error('Error adding movie:', error));
}

// Update a movie
function updateMovie(id, movieName, movieScore) {
    fetch(`/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieName, movieScore }),
    })
        .then(response => response.json())
        .then(data => console.log('Updated movie:', data))
        .catch(error => console.error('Error updating movie:', error));
}

// Delete a movie
function deleteMovie(id) {
    fetch(`/movies/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => console.log('Deleted movie:', data))
        .catch(error => console.error('Error deleting movie:', error));
}

// Read a single movie
function readMovie(id) {
    fetch(`/movies/${id}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('readMovieResult');
            if (data.message) {
                resultDiv.innerHTML = data.message;
            } else {
                resultDiv.innerHTML = `
                    <strong>ID:</strong> ${data.id}<br>
                    <strong>Name:</strong> ${data.movieName}<br>
                    <strong>Date Added:</strong> ${data.dateAdded}<br>
                    <strong>Score:</strong> ${data.score}
                `;
            }
        })
        .catch(error => {
            console.error('Error reading movie:', error);
            document.getElementById('readMovieResult').innerHTML = 'Error reading movie';
        });
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