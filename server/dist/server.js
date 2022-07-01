"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
}, () => {
    console.log("connected to database");
});
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send("This is backend");
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
