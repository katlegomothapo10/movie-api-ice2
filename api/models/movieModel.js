// api/models/movieModel.js
// This acts as our temporary in-memory database
let movies = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi" },
    { id: 2, title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime" },
    { id: 3, title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime" },
    { id: 4, title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" },
    { id: 5, title: "Fight Club", director: "David Fincher", year: 1999, genre: "Drama" }
];

module.exports = movies;