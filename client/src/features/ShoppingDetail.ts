import { createSlice } from "@reduxjs/toolkit";
import { ShoppingDetail, ItemLists } from "../models/ShoppingDetail";

const initialValue: ShoppingDetail = {
  shoppingDetailName: "",
  status: "completed",
  items: [],
  createdAt: new Date(),
};

//
const ShoppingDetailSlice = createSlice({
  name: "shoppingDetail",
  initialState: initialValue,
  reducers: {
    addNewShoppingDetail: (state: any, action: any) => {
      return (state = action.payload);
    },
    addItem: (state: any, action: any) => {
      return {
        ...state,
        items: state.items
          .concat(action.payload)
          .filter(
            (element: any, index: number, arr: any) =>
              index === arr.findIndex((t: any) => t.name === element.name)
          ),
      };
    },
    removeItem: (state: any, action: any) => {
      return {
        ...state,
        items: state.items.filter(
          (item: ItemLists) => item.name !== action.payload
        ),
      };
    },
    addName: (state: any, action: any) => {
      return {
        ...state,
        shoppingDetailName: action.payload,
      };
    },
    removeName: (state: any) => {
      return {
        ...state,
        shoppingDetailName: "",
      };
    },
    addStatus: (state: any, action: any) => {
      return {
        ...state,
        status: action.payload,
      };
    },
    addCreateAt: (state: any, action: any) => {
      return {
        ...state,
        createdAt: action.payload,
      };
    },
  },
});

export default ShoppingDetailSlice.reducer;

export const {
  addNewShoppingDetail,
  addName,
  addItem,
  removeItem,
  addStatus,
  addCreateAt,
  removeName,
} = ShoppingDetailSlice.actions;
