import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import GroceryItem from './models/GroceryItem.js';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes using async functions directly
app.get('/api/items', async (req, res) => {
  const items = await GroceryItem.find();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const newItem = new GroceryItem({ name: req.body.name });
  const savedItem = await newItem.save();
  res.json(savedItem);
});

app.delete('/api/items/:id', async (req, res) => {
  await GroceryItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

// Use PORT directly from .env file
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
