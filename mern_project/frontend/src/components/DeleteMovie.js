// DeleteMovie.js
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/movies/${id}`);
            alert('Movie deleted successfully');
            navigate('/');
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div>
            <h2>Delete Movie</h2>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    );
};

export default DeleteMovie;
