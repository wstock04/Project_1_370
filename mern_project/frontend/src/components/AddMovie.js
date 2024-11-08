// AddMovie.js
import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
    const [movieData, setMovieData] = useState({
        name: '',
        genre: '',
        releaseDate: '',
        rating: '',
        duration: ''
    });

    const handleChange = (e) => {
        setMovieData({ ...movieData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/movies', movieData);
            alert('Movie added successfully');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Movie</h2>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} required />
            </label>
            <label>
                Genre:
                <input type="text" name="genre" onChange={handleChange} required />
            </label>
            <label>
                Release Date:
                <input type="date" name="releaseDate" onChange={handleChange} required />
            </label>
            <label>
                Rating:
                <input type="number" name="rating" onChange={handleChange} required />
            </label>
            <label>
                Duration:
                <input type="number" name="duration" onChange={handleChange} required />
            </label>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
