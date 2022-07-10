import React from "react";
import { useGetAllShoppingDetails } from "../../hooks/useShoppingDetail";

function ShoppingHistory() {
  // Declare property from the custom hook
  const {
    data: shoppingDetails,
    isLoading,
    isError,
    error,
  } = useGetAllShoppingDetails();

  // Render when the data is loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  // Render if the data is error
  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }
  return <div>ShoppingHistory</div>;
}

export default ShoppingHistory;
