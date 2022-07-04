import { Request, Response, NextFunction } from "express";
import { ItemType, ItemModel } from "../models/Items";

// Middleware to get item by id
const getItemByIdMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Declare item variable
  let item: ItemType | null;
  //  Initialize item
  item = {
    name: "",
    category: "",
    note: "",
    image: "",
  };
  try {
    console.log(req.params.id)
    item = await ItemModel.findById(req.params.id);
    if (item == null) {
      res.status(404).send("Can not find this item");
    }
  } catch (error:any) {
    res.status(500).send({ message: error.message });
  }
  res.item = item;
  next();
};

export { getItemByIdMiddleWare };
