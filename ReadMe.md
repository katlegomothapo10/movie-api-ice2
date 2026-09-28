# ICE Task 2: Structured Backend API

## Project Overview
This is a structured Express backend API for managing a collection of movies. It includes routing, controllers, custom middleware (validation and error handling), and CORS configuration.

## Installation & Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add `PORT=4000`.
4. Run `npm run dev` to start the server.

## API Endpoints Tested via Postman

### 1. GET Health Check Route
- **URL:** `http://localhost:4000/health`
- **Description:** Tests if the server is running.
- **Screenshot:**
![Health Check]([PASTE SCREENSHOT HERE])

### 2. GET All Movies
- **URL:** `http://localhost:4000/api/movies`
- **Description:** Fetches all initial movies.
- **Screenshot:**
![Get All Movies]([PASTE SCREENSHOT HERE])

### 3. GET Movie by ID
- **URL:** `http://localhost:4000/api/movies/1`
- **Description:** Fetches a specific movie by its ID.
- **Screenshot:**
![Get Movie By ID]([PASTE SCREENSHOT HERE])

### 4. POST Add New Movie (Valid Input)
- **URL:** `http://localhost:4000/api/movies`
- **Method:** POST
- **Body (raw JSON):**
```json
{
    "title": "The Matrix",
    "director": "Lana Wachowski",
    "year": 1999,
    "genre": "Sci-Fi"
}