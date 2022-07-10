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
exports.getShoppingDetailByIdMW = void 0;
const ShoppingDetail_1 = require("../models/ShoppingDetail");
// Middleware to get shopping detail by id
const getShoppingDetailByIdMW = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let shoppingDetail;
    shoppingDetail = {
        shoppingDetailName: "",
        status: "",
        createdAt: new Date(),
        items: [],
    };
    try {
        shoppingDetail = yield ShoppingDetail_1.ShoppingDetailModel.findById(req.params.id);
        if (shoppingDetail == null) {
            res.status(404).send("Can not find this shopping detail");
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
    res.shoppingDetail = shoppingDetail;
    next();
});
exports.getShoppingDetailByIdMW = getShoppingDetailByIdMW;
