import express from 'express';
import { getMovies, getMovie, createMovie, deleteMovie, updateMovie } from '../Controllers/movieController'

const router = express.Router();

// GET all movies
router.get('/', getMovies);

// GET a single movie
router.get('/:id', getMovie);

// POST a new movie
router.post('/', createMovie);

// DELETE a movie
router.delete('/:id', deleteMovie);

// UPDATE a movie
router.patch('/:id', updateMovie);

export default router;
