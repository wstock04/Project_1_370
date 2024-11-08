// MovieDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };
        fetchMovie();
    }, [id]);

    return (
        <div>
            {movie ? (
                <>
                    <h2>{movie.name}</h2>
                    <p>Genre: {movie.genre}</p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Duration: {movie.duration} minutes</p>
                    <Link to={`/movies/${id}/edit`}>Edit Movie</Link>
                    <Link to={`/movies/${id}/delete`}>Delete Movie</Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetail;

