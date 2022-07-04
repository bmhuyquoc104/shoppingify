export {};
import { ItemType } from "../models/Items";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      MONGO_URI?: string;
      ENV: "test" | "dev" | "prod";
    }
  }
  namespace Express {
    interface Response {
      item: any ;
    }
  }
}
