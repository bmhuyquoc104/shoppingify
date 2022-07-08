import React from "react";
import { useNavigate } from "react-router-dom";
import { imageResources } from "../../assets/imageResources";
import ShoppingCartStyled from "./ShoppingCart.styled";
import ShoppingList from "../ShoppingList/ShoppingList";

function ShoppingCart() {
  const navigate = useNavigate();
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
        {/* <div className="shopping-list-content">No items</div> */}
        <div className="shopping-list-content">
          {" "}
          <ShoppingList />
        </div>

        {/* <div className="cart-logo">
          <img src={imageResources.ShoppingCart} alt="shopping-cart" />
        </div> */}
      </div>
      <div className="shopping-controller">
        <input type="text" placeholder="Enter a name" />
        <button>Save</button>
      </div>
    </ShoppingCartStyled>
  );
}

export default ShoppingCart;
