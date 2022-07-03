import React from "react";
import { imageResources } from "../../assets/imageResources";
import ShoppingCartStyled from "./ShoppingCart.styled";

function ShoppingCart() {
  return (
    <ShoppingCartStyled>
      <div className="shopping-list">
        <div className="cart-banner">
          <img src={imageResources.Bottle} alt="bottle" />
          <div className="banner-content">
            <p>Didn't find what you need?</p>
            <button>Add Item</button>
          </div>
        </div>
        <div className="shopping-list-content">No items</div>
        <div className="cart-logo">
          <img src={imageResources.ShoppingCart} alt="shopping-cart" />
        </div>
      </div>
      <div className="shopping-controller">
        <input type="text" placeholder="Enter a name" />
        <button>Save</button>
      </div>
    </ShoppingCartStyled>
  );
}

export default ShoppingCart;
