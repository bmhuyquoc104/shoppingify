import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  name: "",
  category: "",
  note: "",
  image: "",
};

const ItemChoiceSlice = createSlice({
  name: "itemChoice",
  initialState: initialValue,
  reducers: {
    addUniqueItem: (state: any, action) => {
      return state
        .concat(action.payload)
        .filter(
          (element: any, index: any, arr: any) => arr.indexOf(element) === index
        );
    },
    deleteItem: (state: any, action) => {
      return state.filter((element: any) => element._id !== action.payload);
    },
  },
});

export default ItemChoiceSlice.reducer;
export const { addUniqueItem, deleteItem } = ItemChoiceSlice.actions;
