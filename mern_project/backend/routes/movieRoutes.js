import express from 'express';
import {Movie} from '../models/movieModel.js';

const router = express.Router();

//Route for saving a new movie.
router.post('/', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.genre ||
        !request.body.releaseDate ||
        !request.body.rating ||
        !request.body.duration
      ) {
        return response.status(400).send({
            message: 'Send all required fields: name, genre, releaseDate, rating, duration'
        });
      }
      const newMovie = {
        name: request.body.name,
        genre: request.body.genre,
        releaseDate: request.body.releaseDate,
        rating: request.body.rating,
        duration: request.body.duration
      };

      const movie = await Movie.create(newMovie);

      return response.status(201).send(movie);

    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});

// Route for retrieving all movies
router.get('/', async (request, response) => {
    try {
      const movie = await Movie.find({});
      return response.status(200).json({
        count: movie.length,
        data: movie
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for retrieving one movie
router.get('/:id', async (request, response) => {
    try { 
      const { id } = request.params;
      const movie = await Movie.findById(id);

      if (!movie) {
        return response.status(404).send({ message: 'Movie not found' });
      }

      return response.status(200).json(movie);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});

// Route for updating a movie
router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.genre ||
        !request.body.releaseDate ||
        !request.body.rating ||
        !request.body.duration
      ) {
        return response.status(400).send({
          message: 'Send all required fields: name, genre, releaseDate, rating, duration',
        });
      }
  
      const { id } = request.params;
  
      const result = await Movie.findByIdAndUpdate(id, request.body, { new: true });
  
      if (!result) {
        return response.status(404).json({ message: 'Movie not found' });
      }
  
      return response.status(200).send({ message: 'Movie updated successfully', data: result });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  // Route for deleting a movie
  
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Movie.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Movie not found' });
      }
  
      return response.status(200).send({ message: 'Movie deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;