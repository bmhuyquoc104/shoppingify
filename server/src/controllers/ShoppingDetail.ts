import { Response, Request } from "express";
import {
  ShoppingDetailModel,
  ShoppingDetailType,
} from "../models/ShoppingDetail";

// Function to get all shopping detail
const getAllShoppingDetail = async (req: Request, res: Response) => {
  try {
    const shoppingDetails: ShoppingDetailType[] =
      await ShoppingDetailModel.find();
    if (shoppingDetails == null) {
      return res.status(404).send("Can not find any shopping details");
    }
    return res.status(200).send(shoppingDetails);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

// Function to add new shopping detail
const addNewShoppingDetail = async (req: Request, res: Response) => {
  try {
    const newShoppingDetails = new ShoppingDetailModel({
      shoppingDetailName: req.body.shoppingDetailName,
      createdAt: req.body.createdAt,
      status: req.body.status,
      items: req.body.items,
    });
    if (newShoppingDetails == null) {
      res.status(400).send("Please enter new shopping detail");
    } else {
      await newShoppingDetails.save();
      res.status(200).send(newShoppingDetails);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

// Function to get one shopping detail
const getShoppingDetail = async (req: Request, res: Response) => {
  try {
    res.status(200).send(res.shoppingDetail);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export { addNewShoppingDetail, getAllShoppingDetail, getShoppingDetail };
