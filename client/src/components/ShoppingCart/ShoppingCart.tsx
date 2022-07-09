import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageResources } from "../../assets/imageResources";
import ShoppingCartStyled from "./ShoppingCart.styled";
import ShoppingList from "../ShoppingList/ShoppingList";

function ShoppingCart() {
  // Declare navigate for routing between pages
  const navigate = useNavigate();
  // Declare use selector to use the item choice arr in the store
  const itemArr = useSelector((state: any) => state.itemSelected);

  return (
    <ShoppingCartStyled>
      <div className="shopping-list">
        <div className="cart-banner">
          <img src={imageResources.Bottle} alt="bottle" />
          <div className="banner-content">
            <p>Didn't find what you need?</p>
            <button onClick={() => navigate("add")}>Add Item</button>
          </div>
        </div>
        {itemArr.length === 0 ? (
          <div className="shopping-list-content">No items</div>
        ) : (
          <div className="shopping-list-content">
            {" "}
            <ShoppingList />
          </div>
        )}

        {itemArr.length === 0 && (
          <div className="cart-logo">
            <img src={imageResources.ShoppingCart} alt="shopping-cart" />
          </div>
        )}
      </div>
      <div className="shopping-controller">
        <input type="text" placeholder="Enter a name" />
        <button>Save</button>
      </div>
    </ShoppingCartStyled>
  );
}

export default ShoppingCart;
