-- Create the table
CREATE TABLE favorite_movies (
    id INT PRIMARY KEY,
    movie_name VARCHAR(255) NOT NULL,
    date_added DATE NOT NULL,
    score INT NOT NULL
);

-- Insert the data
INSERT INTO favorite_movies (id, movie_name, date_added, score) VALUES
(1, 'The Shawshank Redemption', '2024-09-07', 5),
(2, 'Inception', '2024-09-08', 4),
(3, 'Pulp Fiction', '2024-09-09', 5),
(4, 'The Dark Knight', '2024-09-11', 4),
(5, 'Forrest Gump', '2024-09-13', 3);

-- Verify the data
SELECT * FROM favorite_movies;