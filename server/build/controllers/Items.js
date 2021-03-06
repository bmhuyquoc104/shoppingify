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
exports.getSalesPerYear = exports.getTopSellingItemsByField = exports.getItemByName = exports.deleteItem = exports.addItem = exports.getItemById = exports.getAllItems = void 0;
const Items_1 = require("../models/Items");
const ShoppingDetail_1 = require("../models/ShoppingDetail");
// Function to get all items
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Items_1.ItemModel.find();
        if (items == null) {
            res.status(404).send("There are no items available");
        }
        else {
            res.status(200).send(items);
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getAllItems = getAllItems;
// Function to get Item By Id
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(res.item);
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getItemById = getItemById;
// Function to add Item
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const item = new Items_1.ItemModel({
            name: req.body.name,
            image: req.body.image,
            note: req.body.note,
            category: req.body.category,
        });
        if (item != null) {
            yield item.save();
            res.status(200).send(item);
        }
        else {
            res.status(404).send("Nothing found");
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.addItem = addItem;
// Function to delete item
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = res.item) === null || _a === void 0 ? void 0 : _a._id;
        yield Items_1.ItemModel.deleteOne({ _id: id });
        res.status(200).send("Successfully deleted");
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.deleteItem = deleteItem;
// Function to search by name
const getItemByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let items;
        let name = req.body.name;
        console.log(name);
        if (name == "") {
            items = yield Items_1.ItemModel.find();
        }
        else {
            items = yield Items_1.ItemModel.find({
                name: {
                    $regex: `${name}`,
                    $options: "i",
                },
            });
        }
        if (items != null) {
            res.status(200).send(items);
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getItemByName = getItemByName;
// Function to get the best selling item
const getTopSellingItemsByField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const field = req.body.field;
        const items = yield ShoppingDetail_1.ShoppingDetailModel.aggregate([
            { $unwind: "$items" },
            {
                $group: {
                    _id: `$items.${field}`,
                    total: {
                        $sum: "$items.quantity",
                    },
                },
            },
            {
                $group: {
                    _id: 1,
                    item: {
                        $push: {
                            quantity: "$total",
                            name: "$_id",
                        },
                    },
                    all: {
                        $sum: "$total",
                    },
                },
            },
            { $unwind: "$item" },
            {
                $project: {
                    _id: 1,
                    item: 1,
                    all: 1,
                    percentage: {
                        $round: [
                            { $multiply: [{ $divide: ["$item.quantity", "$all"] }, 100] },
                            1,
                        ],
                    },
                },
            },
            {
                $sort: {
                    percentage: -1,
                },
            },
            { $limit: 3 },
        ]);
        if (items != null) {
            res.status(200).send(items);
        }
        else {
            res.status(404).send("Not Found");
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getTopSellingItemsByField = getTopSellingItemsByField;
// Function to get the array of sales monthly
const getSalesPerYear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const year = req.body.year;
    try {
        const items = yield ShoppingDetail_1.ShoppingDetailModel.aggregate([
            {
                $project: {
                    createdAt: 1,
                    items: 1,
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
            },
            {
                $match: { year: { $gte: year } },
            },
            { $unwind: "$items" },
            {
                $group: {
                    _id: {
                        month: "$month",
                        year: "$year",
                    },
                    total: { $sum: "$items.quantity" },
                },
            },
            {
                $project: {
                    year: "$_id.year",
                    month: "$_id.month",
                    total: 1,
                    key: {
                        $concat: [
                            { $toString: "$_id.month" },
                            "/",
                            { $toString: "$_id.year" },
                        ],
                    },
                    _id: 0,
                },
            },
            {
                $sort: {
                    year: -1,
                    month: -1,
                },
            },
        ]);
        if (items != null) {
            res.status(200).send(items);
        }
        else {
            res.status(404).send("Not found ");
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getSalesPerYear = getSalesPerYear;
