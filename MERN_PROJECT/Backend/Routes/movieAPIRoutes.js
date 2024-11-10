import express from 'express';
import Movie from '../Models/movieModel.js';

const router = express.Router();

// GET all movies:
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all movies' });
});

// GET a single movie:
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single movie' });
});

// POST a new movie:
router.post('/', async (req, res) => {
    const { title, genre, releaseDate, rating, duration } = req.body;

    try {
        const movie = await Movie.create({ title, genre, releaseDate, rating, duration });
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE a movie:
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a movie' });
});

// UPDATE a movie:
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a movie' });
});

export default router;
