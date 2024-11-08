import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/movies');
                setMovies(response.data.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        {movie.name} - {movie.genre} - {movie.releaseDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
