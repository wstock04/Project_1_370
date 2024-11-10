import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import movieAPIRoutes from './Routes/movieAPIRoutes.js'; 
import cors from 'cors';

const app = express();

// Load environment variables
dotenv.config();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/movies', movieAPIRoutes);

// Connects to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listens for requests on port 4000.
        app.listen(process.env.PORT || 4000, () => {
            console.log('Successfully connected to database!\nServer listening on port 4000!');
        });
    })
    .catch((error) => {
        console.log(error);
    });
