import express from "express";
import { getAllItems } from "../controllers/Items";

// Declare the router 
const router = express.Router();

router.route("/").get(getAllItems);

export default router;
