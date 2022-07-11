// type for items in shopping detail
export type ItemLists = {
  name: string;
  quantity: number;
  category: string;
  _id?: string;
};

// Shopping detail type
export type ShoppingDetail = {
  shoppingDetailName: string;
  createdAt?: Date;
  _id?: string;
  status: string;
  items: ItemLists[];
};
