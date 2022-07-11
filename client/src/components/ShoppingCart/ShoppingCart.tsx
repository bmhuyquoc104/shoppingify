import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addName, addStatus, addCreateAt } from "../../features/ShoppingDetail";
import { useAddNewShoppingDetail } from "../../hooks/useShoppingDetail";
import { imageResources } from "../../assets/imageResources";
import { ToggleContext } from "../../hooks/useToggleContext";
import ShoppingCartStyled from "./ShoppingCart.styled";
import ShoppingList from "../ShoppingList/ShoppingList";

function ShoppingCart() {
  // Declare navigate for routing between pages
  const navigate = useNavigate();
  // Declare use selector to use the item choice arr in the store
  const itemArr = useSelector((state: any) => state.itemSelected);
  const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  const dispatch = useDispatch();
  // Get property from the use context
  const { isToggleEdit, setIsToggleCancel, setIsToggleEdit } =
    useContext(ToggleContext);
  // Declare state to track edit button status
  const [isSaved, setIsSaved] = useState(false);
  const inputRef = useRef<any>();

  const { mutate } = useAddNewShoppingDetail();

  const setStatus = () => {
    return new Promise((resolve, reject) => {
      resolve(dispatch(addStatus("completed")));
    });
  };

  // Function to handle complete button
  const handleComplete = () => {
    if (shoppingDetail.shoppingDetailName == "") {
      console.log("name d9ang rong");
    } else if (shoppingDetail.items.length <= 0) {
      console.log("item rong");
    } else {
      console.log(shoppingDetail);
      mutate(shoppingDetail);
    }
  };

  // Function to handle cancel
  const handleCancel = () => {
    dispatch(addStatus("cancelled"));
    dispatch(addCreateAt(new Date()));
    console.log(shoppingDetail);
  };

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
          <button onClick={handleComplete} className="complete">
            Complete
          </button>
        </div>
      ) : (
        <div className="shopping-controller">
          {isSaved ? (
            <>
              <input
                readOnly
                value={`Name: ${shoppingDetail.shoppingDetailName}`}
                ref={inputRef}
              />
              <button
                onClick={() => {
                  setIsSaved(false);
                  inputRef.current.value = "";
                }}
              >
                Change
              </button>
            </>
          ) : (
            <>
              <input
                onChange={(e: any) => dispatch(addName(e.target.value))}
                type="text"
                placeholder="Enter a name"
              />
              <button onClick={() => setIsSaved(true)}>Save</button>
            </>
          )}
        </div>
      )}
    </ShoppingCartStyled>
  );
}

export default ShoppingCart;
