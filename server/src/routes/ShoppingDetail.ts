import express from "express";
import {
  getAllShoppingDetail,
  getShoppingDetail,
  addNewShoppingDetail,
} from "../controllers/ShoppingDetail";
import { getShoppingDetailByIdMW } from "../middleware/GetShoppingDetailByIdMW";

// Declare router
const router = express.Router();

// Declare routes
router.route("/").get(getAllShoppingDetail).post(addNewShoppingDetail);
router.route("/:id").get(getShoppingDetailByIdMW, getShoppingDetail);

export default router;
