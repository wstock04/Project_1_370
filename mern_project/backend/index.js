import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import movieRoute from './routes/movieRoutes.js';
import cors from "cors";

const app = express();

//Parses request body.
app.use(express.json());

app.use(
cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
})
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome')
});
  
app.use('/movies', movieRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

//stockhw
//DMJkusQerXr3vYS3