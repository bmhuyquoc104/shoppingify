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
        items: action.payload,
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
        items: state.items.map(
          (item: ItemLists) =>
            (item._id = action.payload && {
              ...item,
              quantity: item.quantity + 1,
            })
        ),
      };
    },
    decreaseQuantity: (state: any, action: any) => {
      return {
        ...state,
        items: state.item.map(
          (item: ItemLists) =>
            item._id === action.payload && {
              ...item,
              quantity: item.quantity - 1,
            }
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
