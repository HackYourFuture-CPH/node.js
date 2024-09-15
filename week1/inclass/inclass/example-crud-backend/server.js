import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { listMovies, addMovie, updateMovie, deleteMovie, readMovie } from './crud.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Add this line to use JSON body parser on requests
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


// Array simulating a database of favorite movies
const favoriteMovies = [
    { id: 1, movieName: "The Shawshank Redemption", dateAdded: "2024-09-07", score: 5 },
    { id: 2, movieName: "Inception", dateAdded: "2024-09-08", score: 4 },
    { id: 3, movieName: "Pulp Fiction", dateAdded: "2024-09-09", score: 5 },
    { id: 4, movieName: "The Dark Knight", dateAdded: "2024-09-11", score: 4 },
    { id: 5, movieName: "Forrest Gump", dateAdded: "2024-09-13", score: 3 }
];

// Routes
app.get('/movies', (req, res) => {
    console.log("GET request received");
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    res.json(listMovies(favoriteMovies));
});

app.post('/movies', (req, res) => {
    console.log("POST request received");
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    const { movieName, movieScore } = req.body;
    const newMovie = addMovie(favoriteMovies, movieName, movieScore);
    res.status(201).json(newMovie);
});

app.put('/movies/:id', (req, res) => {
    console.log("PUT request received");
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    const id = parseInt(req.params.id);
    const { movieName, movieScore } = req.body;
    const updatedMovie = updateMovie(favoriteMovies, id, movieName, movieScore);
    if (updatedMovie) {
        res.json(updatedMovie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

app.delete('/movies/:id', (req, res) => {
    console.log("DELETE request received");
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    const id = parseInt(req.params.id);
    const deletedMovie = deleteMovie(favoriteMovies,id);
    if (deletedMovie) {
        res.json(deletedMovie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

app.get('/movies/:id', (req, res) => {
    console.log("GET request received");
    console.log("body: ", req.body);
    console.log("params: ", req.params);
    const id = parseInt(req.params.id);
    const movie = readMovie(favoriteMovies, id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

// Add this route before other routes
app.get('/', (req, res) => {
    console.log("Request for index.html received");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

