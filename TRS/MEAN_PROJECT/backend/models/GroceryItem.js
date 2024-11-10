import mongoose from 'mongoose';

const GroceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema);
export default GroceryItem;
