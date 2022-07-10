import { Request, Response, NextFunction } from "express";
import {
  ShoppingDetailType,
  ShoppingDetailModel,
} from "../models/ShoppingDetail";
// Middleware to get shopping detail by id
const getShoppingDetailByIdMW = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let shoppingDetail: ShoppingDetailType | null;
  shoppingDetail = {
    shoppingDetailName: "",
    status: "",
    createdAt: new Date(),
    items: [],
  };
  try {
    shoppingDetail = await ShoppingDetailModel.findById(req.params.id);
    if (shoppingDetail == null) {
      res.status(404).send("Can not find this shopping detail");
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
  res.shoppingDetail = shoppingDetail;
  next();
};

export { getShoppingDetailByIdMW };
