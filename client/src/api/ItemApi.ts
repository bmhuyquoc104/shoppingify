import axios from "axios";
import { Item } from "../models/Item";
import { QueryByName, Condition } from "../models/Item";
// Declare base url
const api = axios.create({
  // baseURL: "https://bmhuyquoc104-shoppingify.herokuapp.com/",
  baseURL: "http://localhost:8000",
});

// Function to get all items from the api
const getAllItems = () => api.get("/items").then((res) => res.data);

// Function to get item by id from the api
const getItem = (id: string) => api.get(`items/${id}`).then((res) => res.data);

// Function to add item
const addItem = (item: Item) =>
  api.post("/items", item).then((res) => res.data);

// Function to delete item
const deleteItem = (id: string) =>
  api.delete(`/items/${id}`).then((res) => res.data);

// Function to search item by name
const getItemByName = (name: QueryByName) =>
  api.post(`/items/name/`, name).then((res) => res.data);

// Function to get top item by condition
const getTopItemsByCondition = (condition: Condition) =>
  api.post("items/topItems", condition).then((res) => res.data);

export {
  getAllItems,
  getItem,
  addItem,
  deleteItem,
  getItemByName,
  getTopItemsByCondition,
};
