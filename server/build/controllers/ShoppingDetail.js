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
exports.getShoppingDetail = exports.getAllShoppingDetail = exports.addNewShoppingDetail = void 0;
const ShoppingDetail_1 = require("../models/ShoppingDetail");
// Function to get all shopping detail
const getAllShoppingDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shoppingDetails = yield ShoppingDetail_1.ShoppingDetailModel.find().sort({ createdAt: -1 });
        if (shoppingDetails == null) {
            return res.status(404).send("Can not find any shopping details");
        }
        return res.status(200).send(shoppingDetails);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getAllShoppingDetail = getAllShoppingDetail;
// Function to add new shopping detail
const addNewShoppingDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newShoppingDetails = new ShoppingDetail_1.ShoppingDetailModel({
            shoppingDetailName: req.body.shoppingDetailName,
            createdAt: req.body.createdAt,
            status: req.body.status,
            items: req.body.items,
        });
        if (newShoppingDetails == null) {
            res.status(400).send("Please enter new shopping detail");
        }
        else {
            yield newShoppingDetails.save();
            res.status(200).send(newShoppingDetails);
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.addNewShoppingDetail = addNewShoppingDetail;
// Function to get one shopping detail
const getShoppingDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(res.shoppingDetail);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getShoppingDetail = getShoppingDetail;
