import axios from "axios";

// Declare base url
const api = axios.create({
  baseURL: "https://bmhuyquoc104-shoppingify.herokuapp.com/",
});

// Function to get all items from the api
const getAllItems = () => api.get("/items").then((res) => res.data);

// Function to get item by id from the api
const getItem = (id: string) => api.get(`items/${id}`).then((res) => res.data);
export { getAllItems, getItem };
