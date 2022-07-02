import React from "react";
import { useGetAllItems } from "../../hooks/useItems";

function ItemList() {
  const { data: items, error, isError, isLoading } = useGetAllItems();
  if (isLoading) {
    <h1>Loading ...</h1>;
  }
  console.log(items);
  return <div>ItemList</div>;
}

export default ItemList;
