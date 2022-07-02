import express, { Request, Response, Express } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import ItemRouter from "./routes/Items";
// Check if the env is in the production or not
if (process.env.NODE_ENV !== "production") {
  config();
}
// Declare app, port , and mongo URI
const app = express();
const PORT: number = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Config default route for the server
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is backend");
});

// Config the items route
app.use("/items", ItemRouter);

// Start the server on port 
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
