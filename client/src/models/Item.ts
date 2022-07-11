// Item type
export type Item = {
  name: string;
  image: string;
  note?: string;
  category: string;
  _id?: string;
};

export type ItemList = {
  category: string;
  _id?: string;
  quantity: string;
  name: string;
};
