// api/middleware/validateMovie.js
const validateMovie = (req, res, next) => {
    const { title, director, year, genre } = req.body;

    // Check if any required field is missing
    if (!title || !director || !year || !genre) {
        return res.status(400).json({ 
            error: "Bad Request", 
            message: "Validation failed. Please provide title, director, year, and genre." 
        });
    }
    
    // If everything is present, pass control to the controller
    next(); 
};

module.exports = validateMovie;