// import { createSlice } from "@reduxjs/toolkit";

// const initialValue = {
//   name: "",
//   category: "",
//   note: "",
//   image: "",
// };

// const ItemChoiceSlice = createSlice({
//   name: "itemChoice",
//   initialState: initialValue,
//   reducers: {
//     addUniqueItem: (state: any, action) => {
//       return state
//         .concat(action.payload)
//         .filter(
//           (element: any, index: any, arr: any) => arr.indexOf(element) === index
//         );
//     },
//     deleteItem: (state: any, action) => {
//       return state.filter((element: any) => element._id !== action.payload);
//     },
//   },
// });

// export default ItemChoiceSlice.reducer;
// export const { addUniqueItem, deleteItem } = ItemChoiceSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/Item";

// Declare the initial value for item
const initialValue: Item[] = [];

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
          (element: Item, index: number, arr: Item[]) =>
            index === arr.findIndex((t: Item) => t.name === element.name)
        );
    },
    // Delete the item choice from the arr
    deleteItemChoice: (state: any, action) => {
      return state.filter((element: Item) => element._id !== action.payload);
    },
  },
});

export default itemSelectedSlice.reducer;
export const { addUniqueItem, deleteItemChoice } = itemSelectedSlice.actions;
