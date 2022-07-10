"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ShoppingDetail_1 = require("../controllers/ShoppingDetail");
const GetShoppingDetailByIdMW_1 = require("../middleware/GetShoppingDetailByIdMW");
// Declare router
const router = express_1.default.Router();
// Declare routes
router.route("/").get(ShoppingDetail_1.getAllShoppingDetail).post(ShoppingDetail_1.addNewShoppingDetail);
router.route("/:id").get(GetShoppingDetailByIdMW_1.getShoppingDetailByIdMW, ShoppingDetail_1.getShoppingDetail);
exports.default = router;
