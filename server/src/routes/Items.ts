import express from "express";
import {
  getAllItems,
  getItemById,
  addItem,
  getTopSellingItems,
  getItemByName,
  deleteItem,
} from "../controllers/Items";
import { getItemByIdMiddleWare } from "../middleware/GetItemByIdMW";
// Declare the router
const router = express.Router();

router.route("/").get(getAllItems).post(addItem);
router.route("/most-common").get(getTopSellingItems);
router
  .route("/:id")
  .get(getItemByIdMiddleWare, getItemById)
  .delete(getItemByIdMiddleWare, deleteItem);
router.route("/name").post(getItemByName);
export default router;
