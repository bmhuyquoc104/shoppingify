"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Items_1 = require("../controllers/Items");
const GetItemByIdMW_1 = require("../middleware/GetItemByIdMW");
// Declare the router
const router = express_1.default.Router();
router.route("/").get(Items_1.getAllItems).post(Items_1.addItem);
router.route("/:id").get(GetItemByIdMW_1.getItemByIdMiddleWare, Items_1.getItemById);
exports.default = router;
