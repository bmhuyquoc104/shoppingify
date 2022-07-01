import { ItemModel, ItemType } from "../models/Items";
import { Request, Response, NextFunction } from "express";

// Function to get all items
const getAllItems = async (req: Request, res: Response) => {
  try {
    const items: ItemType | any = await ItemModel.find();
    if (items == null) {
      res.status(404).send("There are no items available");
    } else {
      res.status(200).send(items);
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

export {getAllItems}
