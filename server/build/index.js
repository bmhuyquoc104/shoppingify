"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const Items_1 = __importDefault(require("./routes/Items"));
const ShoppingDetail_1 = __importDefault(require("./routes/ShoppingDetail"));
// Declare app, port , and mongo URI
const app = (0, express_1.default)();
const PORT = 3333;
const MONGO_URI = process.env.MONGO_URI;
// Connect to mongoDB
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
}, () => {
    console.log("connected to database");
});
// Avoid cross origin when connect to other domain
app.use((0, cors_1.default)());
// Accept json request from other domains
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Config default route for the server
app.get("/", (req, res) => {
    res.status(200).send("This is backend");
});
// Config the items route
app.use("/items", Items_1.default);
// Config the shopping detail route
app.use("/shopping-detail", ShoppingDetail_1.default);
// Start the server on port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
