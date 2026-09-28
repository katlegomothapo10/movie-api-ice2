// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../api/controllers/movieController');
const validateMovie = require('../api/middleware/validateMovie');

// Routes for /api/movies
router
    .route('/')
    .get(movieController.getAllMovies)
    .post(validateMovie, movieController.addMovie); // Validation runs before controller

// Routes for /api/movies/:id
router
    .route('/:id')
    .get(movieController.getMovieById);

module.exports = router;