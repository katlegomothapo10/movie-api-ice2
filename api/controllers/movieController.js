// api/controllers/movieController.js
let movies = require('../models/movieModel');

// 1. GET all movies
exports.getAllMovies = (req, res) => {
    res.status(200).json({
        status: "success",
        results: movies.length,
        data: { movies }
    });
};

// 2. GET a movie by its ID
exports.getMovieById = (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(m => m.id === id);

    if (!movie) {
        return res.status(404).json({
            status: "fail",
            message: `Movie with ID ${id} not found.`
        });
    }

    res.status(200).json({
        status: "success",
        data: { movie }
    });
};

// 3. POST (Add) a new movie
exports.addMovie = (req, res) => {
    // Generate a new ID based on the last movie's ID
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    
    // Create the new movie object
    const newMovie = { id: newId, ...req.body };
    
    // Add to our temporary array
    movies.push(newMovie);

    res.status(201).json({
        status: "success",
        message: "Movie added successfully to temporary memory.",
        data: { movie: newMovie }
    });
};