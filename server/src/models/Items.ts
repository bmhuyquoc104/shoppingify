import mongoose, { Schema } from "mongoose";

// Declare type for item
type ItemType = {
  _id?: string;
  category: string;
  name: string;
  image: string;
  note: string;
};

// Declare schema for item
const ItemSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  note: String,
});

// Declare the model for item
const ItemModel = mongoose.model("items", ItemSchema);

export { ItemModel, ItemType };
