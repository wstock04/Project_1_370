// UpdateMovie.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState({
        name: '',
        genre: '',
        releaseDate: '',
        rating: '',
        duration: ''
    });

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/movies/${id}`);
                setMovieData(response.data);
            } catch (error) {
                console.error('Error fetching movie for update:', error);
            }
        };
        fetchMovie();
    }, [id]);

    const handleChange = (e) => {
        setMovieData({ ...movieData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/movies/${id}`, movieData);
            alert('Movie updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Movie</h2>
            <label>
                Name:
                <input type="text" name="name" value={movieData.name} onChange={handleChange} required />
            </label>
            <label>
                Genre:
                <input type="text" name="genre" value={movieData.genre} onChange={handleChange} required />
            </label>
            <label>
                Release Date:
                <input type="date" name="releaseDate" value={movieData.releaseDate} onChange={handleChange} required />
            </label>
            <label>
                Rating:
                <input type="number" name="rating" value={movieData.rating} onChange={handleChange} required />
            </label>
            <label>
                Duration:
                <input type="number" name="duration" value={movieData.duration} onChange={handleChange} required />
            </label>
            <button type="submit">Update Movie</button>
        </form>
    );
};

export default UpdateMovie;
