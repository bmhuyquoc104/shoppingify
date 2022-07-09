import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageResources } from "../../assets/imageResources";
import { ToggleContext } from "../../hooks/useToggleContext";
import ShoppingCartStyled from "./ShoppingCart.styled";
import ShoppingList from "../ShoppingList/ShoppingList";


function ShoppingCart() {
  // Declare navigate for routing between pages
  const navigate = useNavigate();
  // Declare use selector to use the item choice arr in the store
  const itemArr = useSelector((state: any) => state.itemSelected);
  // Declare state to track edit button status
  const { isToggleEdit, setIsToggleCancel } = useContext(ToggleContext);

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
          <div className="shopping-list-content active">
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
      {isToggleEdit ? (
        <div className="shopping-controller complete">
          <button onClick={() => setIsToggleCancel(true)} className="cancel">
            cancel
          </button>
          <button className="complete">Complete</button>
        </div>
      ) : (
        <div className="shopping-controller">
          <input type="text" placeholder="Enter a name" />
          <button>Save</button>
        </div>
      )}
    </ShoppingCartStyled>
  );
}

export default ShoppingCart;
