import express from "express";
import { getAllItems, getItemById, addItem } from "../controllers/Items";
import { getItemByIdMiddleWare } from "../middleware/GetItemByIdMW";
// Declare the router
const router = express.Router();

router.route("/").get(getAllItems).post(addItem);
router.route("/:id").get(getItemByIdMiddleWare, getItemById);
export default router;
