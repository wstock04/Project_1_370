import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', false); // This suppresses the deprecation warning for find() without await

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define Schema
const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  }
});
const Grocery = mongoose.model('Grocery', grocerySchema);

// CRUD routes
app.post('/api/groceries', async (req, res) => {
  const grocery = new Grocery(req.body);
  try {
    const savedGrocery = await grocery.save();
    res.status(201).json(savedGrocery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/groceries', async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/api/groceries/:id', async (req, res) => {
  try {
    const deletedGrocery = await Grocery.findByIdAndDelete(req.params.id);
    if (!deletedGrocery) return res.status(404).json({ message: 'Grocery not found' });
    res.json({ message: 'Grocery deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));