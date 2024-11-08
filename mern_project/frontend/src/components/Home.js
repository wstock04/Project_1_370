// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
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
            <h2>All Movies</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        <Link to={`/movies/${movie._id}`}>
                            <strong>{movie.name}</strong> - {movie.genre} - {movie.releaseDate}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
