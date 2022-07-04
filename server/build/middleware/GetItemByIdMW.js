"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemByIdMiddleWare = void 0;
const Items_1 = require("../models/Items");
// Middleware to get item by id
const getItemByIdMiddleWare = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Declare item variable
    let item;
    //  Initialize item
    item = {
        name: "",
        category: "",
        note: "",
        image: "",
    };
    try {
        console.log(req.params.id);
        item = yield Items_1.ItemModel.findById(req.params.id);
        if (item == null) {
            res.status(404).send("Can not find this item");
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
    res.item = item;
    next();
});
exports.getItemByIdMiddleWare = getItemByIdMiddleWare;
