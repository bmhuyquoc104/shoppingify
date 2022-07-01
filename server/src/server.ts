import express, { Request, Response, Express } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose, {ConnectOptions} from "mongoose";
if (process.env.NODE_ENV !== "production") {
  config();
}
const app = express();
const PORT:number =  process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{
  useNewUrlParser:true,
} as ConnectOptions  , () => { 
  console.log("connected to database")
})

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/",(req:Request, res:Response) => {
  res.status(200).send("This is backend")
})

app.listen(PORT, ()=> {
  console.log(`Server is running at http://localhost:${PORT}`);
})