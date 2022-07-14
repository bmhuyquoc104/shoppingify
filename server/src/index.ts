import express, { Request, Response, Express } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { ConnectOptions } from "mongoose";
import ItemRouter from "./routes/Items";
import ShoppingDetailRouter from "./routes/ShoppingDetail";

// Declare app, port , and mongo URI
const app: Express = express();
const PORT: number = 3333;
const MONGO_URI = process.env.MONGO_URI!;

// Connect to mongoDB
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
  } as ConnectOptions,
  () => {
    console.log("connected to database");
  }
);

// Avoid cross origin when connect to other domain
app.use(cors());
// Accept json request from other domains
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Config default route for the server
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is backend");
});

// Config the items route
app.use("/items", ItemRouter);

// Config the shopping detail route
app.use("/shopping-detail", ShoppingDetailRouter);

// Start the server on port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
