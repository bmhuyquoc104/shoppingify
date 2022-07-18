// Item type
export type Item = {
  name: string;
  image: string;
  note?: string;
  category: string;
  _id?: string;
  quantity?: number;
};

export type ItemList = {
  category: string;
  _id?: string;
  quantity: string;
  name: string;
};

export type QueryByName = {
  name: string;
};

export type Condition = {
  field: string;
};
