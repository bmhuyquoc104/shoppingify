import { ItemModel, ItemType } from "../models/Items";
import { Request, Response, NextFunction } from "express";

// Function to get all items
const getAllItems = async (req: Request, res: Response) => {
  try {
    const items: ItemType[] = await ItemModel.find();
    if (items == null) {
      res.status(404).send("There are no items available");
    } else {
      res.status(200).send(items);
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};
// Function to get Item By Id
const getItemById = async (req: Request, res: Response) => {
  try {
    res.status(200).send(res.item);
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

// Function to add Item
const addItem = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const item = new ItemModel({
      name: req.body.name,
      image: req.body.image,
      note: req.body.note,
      category: req.body.category,
    });
    if (item != null) {
      await item.save();
      res.status(200).send(item);
    } else {
      res.status(404).send("Nothing found");
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

// Function to delete item
const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = res.item?._id;
    await ItemModel.deleteOne({ _id: id });
    res.status(200).send("Successfully deleted");
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

// Function to search by name
const getItemByName = async (req: Request, res: Response) => {
  try {
    let items;
    let name = req.body.name;
    console.log(name)
    if (name == "") {
      items = await ItemModel.find();
    } else {
      items = await ItemModel.find({
        name: {
          $regex: `${name}`,
          $options: "i",
        },
      });
    }

    if (items != null) {
      res.status(200).send(items);
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

export { getAllItems, getItemById, addItem, deleteItem, getItemByName };
