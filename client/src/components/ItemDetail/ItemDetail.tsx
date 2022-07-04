import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetItem } from "../../hooks/useItems";

function ItemDetail() {
  // Get passing id from the url
  const { id } = useParams();

  // Declare navigate variable
  const navigate = useNavigate();

  //Get property from custom hook
  const { data: Item, isError, error, isLoading } = useGetItem(id!);

  // Render when the data is fetching
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Render when the data is error
  if (isError) {
    return <h1>{`Error:${error}`}</h1>;
  }

  console.log(Item);

  return <div>ItemDetail</div>;
}

export default ItemDetail;
