import { createSlice } from "@reduxjs/toolkit";
import { ShoppingDetail, ItemLists } from "../models/ShoppingDetail";

const initialValue: ShoppingDetail = {
  shoppingDetailName: "",
  status: "",
  items: [],
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
    addName: (state: any, action: any) => {
      return {
        ...state,
        shoppingDetailName: action.payload,
      };
    },
    increaseQuantity: (state: any, action: any) => {
      return {
        ...state,
        items: state.items.map((item: ItemLists) =>
          item.name === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };
    },
    decreaseQuantity: (state: any, action: any) => {
      
      return {
        ...state,
        items: state.items.map((item: ItemLists) =>
          item.name === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    },
  },
});

export default ShoppingDetailSlice.reducer;

export const {
  addNewShoppingDetail,
  decreaseQuantity,
  increaseQuantity,
  addName,
  addItem,
} = ShoppingDetailSlice.actions;
