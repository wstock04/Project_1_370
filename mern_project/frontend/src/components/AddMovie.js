import React, { useState } from 'react';
import axios from 'axios';

function AddMovie() {
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    releaseDate: '',
    rating: '',
    duration: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/movies', formData)
      .then(response => {
        alert('Movie added successfully!');
        setFormData({
          name: '',
          genre: '',
          releaseDate: '',
          rating: '',
          duration: ''
        });
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} required />
      <input type="date" name="releaseDate" value={formData.releaseDate} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
      <input type="number" name="duration" placeholder="Duration (in minutes)" value={formData.duration} onChange={handleChange} required />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;