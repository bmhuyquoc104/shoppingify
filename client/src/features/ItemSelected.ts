import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/Item";

// Declare the initial value for item
const initialValue: any[] = [];

// Slice function to extract reducer functions
const itemSelectedSlice = createSlice({
  name: "itemSelected",
  initialState: initialValue,
  reducers: {
    // Function to add only unique item to the item choice arr
    addUniqueItem: (state: any, action) => {
      return state
        .concat(action.payload)
        .filter(
          (element: any, index: number, arr: any[]) =>
            index === arr.findIndex((t: Item) => t.name === element.name)
        );
    },
    // Delete the item choice from the arr
    deleteItemChoice: (state: any, action) => {
      return state.filter((element: Item) => element.name !== action.payload);
    },
    increaseQuantity: (state: any, action) => {
      return state.map((element: Item) =>
        element.name === action.payload
          ? {
              ...element,
              quantity: element.quantity! + 1,
            }
          : element
      );
    },
    decreaseQuantity: (state: any, action) => {
      return state.map((element: Item) =>
        element.name === action.payload
          ? {
              ...element,
              quantity: parseInt(`${element.quantity === 0 ? 0 : element.quantity! -1}`),
            }
          : element
      );
    },
  },
});

export default itemSelectedSlice.reducer;
export const {
  addUniqueItem,
  deleteItemChoice,
  increaseQuantity,
  decreaseQuantity,
} = itemSelectedSlice.actions;
