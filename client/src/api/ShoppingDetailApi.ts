import axios from "axios";

// Declare base url
const api = axios.create({
  baseURL: "https://bmhuyquoc104-shoppingify.herokuapp.com/",
});

// Function to get all shopping details using axios
const getAllShoppingDetails = () =>
  api.get("/shopping-detail").then((res) => res.data);

// Function to get shopping detail by id using axios
const getShoppingDetail = (id: string) =>
  api.get(`/shopping-detail/${id}`).then((res) => res.data);

// Function to add new shopping detail using axios
const addNewShoppingDetail = (shoppingDetail: any) =>
  api.post("/shopping-detail", shoppingDetail).then((res) => res.data);

export { addNewShoppingDetail, getShoppingDetail, getAllShoppingDetails };
