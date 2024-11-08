import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    duration: {
        type: Number, // duration in minutes
        min: 0
    }
});

export const Movie = mongoose.model('Movie', movieSchema);
