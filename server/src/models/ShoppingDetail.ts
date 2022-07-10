import mongoose, { Schema } from "mongoose";

// Declare type items
type Items = [
  {
    name: String;
    quantity: Number;
    category: String;
  }
];

// Declare type for shopping detail type
type ShoppingDetailType = {
  createdAt: Date;
  shoppingDetailName: String;
  status: String;
  items: Items[];
};

// Declare shopping detail schema
const ShoppingDetailSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  shoppingDetailName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
  ],
});

// Declare the shopping detail model
const ShoppingDetailModel = mongoose.model(
  "shopping-details",
  ShoppingDetailSchema
);

export { ShoppingDetailModel, ShoppingDetailType };
