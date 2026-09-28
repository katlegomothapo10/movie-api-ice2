// api/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.stack);
    
    // Central error handler response
    res.status(500).json({
        error: "Internal Server Error",
        message: err.message || "Something went wrong on the server."
    });
};

module.exports = errorHandler;