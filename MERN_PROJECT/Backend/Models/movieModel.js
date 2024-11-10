import mongoose from 'mongoose';

const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
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
        type: Number, 
        min: 0
    }
});

export default mongoose.model('Movie', movieSchema);
