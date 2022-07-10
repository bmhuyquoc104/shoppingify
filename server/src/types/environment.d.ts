export {};
import { ItemType } from "../models/Items";
import { ShoppingDetailType } from "../models/ShoppingDetail";
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
      item: ItemType?;
      shoppingDetail: ShoppingDetailType?;
    }
  }
}
