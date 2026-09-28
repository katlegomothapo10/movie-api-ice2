// index.js
require('dotenv').config(); // Load .env variables
const express = require('express');
const cors = require('cors'); // Controlled CORS
const movieRouter = require('./routes/movieRoutes');
const errorHandler = require('./api/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware: Controlled Cross-Origin Resource Sharing (CORS)
app.use(cors()); 

// 2. Middleware: Parse incoming JSON requests
app.use(express.json());

// 3. Root Route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Movie API Root!');
});

// 4. Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// 5. Mount the Routes
app.use('/api/movies', movieRouter);

// 6. Central Error Handler (Must be placed AFTER all routes)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});