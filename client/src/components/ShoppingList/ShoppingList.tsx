import { RiPencilFill } from "react-icons/ri";
import { FiTrash } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import ShoppingListStyled from "./ShoppingList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemChoice } from "../../features/ItemSelected";
import { Item } from "../../models/Item";

function ShoppingList() {
  // Declare use selector and use dispatch to use the value and action in the item reducer
  const itemChoice = useSelector((state: any) => state.itemSelected);

  console.log(itemChoice);
  const dispatch = useDispatch();

  // Declare queryClient
  const queryClient = useQueryClient();
  // Get the item query
  const items: any = queryClient.getQueryData(["items"]);
  // Declare state to track category
  const [category, setCategory] = useState<Item[] | any>([]);
  // Declare state to track item-quantity
  const [isToggleItemQuantity, setIsToggleItemQuantity] = useState(false);
  // Declare use effect
  useEffect(() => {
    const arr = [...new Set(items.map((item: Item) => item.category))];
    setCategory(arr);
  }, [items]);
  return (
    <ShoppingListStyled>
      <div className="shopping-list-title">
        <h2>Shopping list</h2>
        <RiPencilFill />
      </div>
      <div className="item-category">
        <h3>Fruit and vegetables</h3>
        <div className="item-container">
          <div className="item-name">Avocado</div>
          <div className="item-controller">
            <button className="item-quantity">1 pcs</button>
          </div>
        </div>
        <div className="item-container">
          <div className="item-name">Avocado</div>
          <div className="item-controller">
            {isToggleItemQuantity ? (
              <div className="item-controller active">
                {" "}
                <div className="trash-container">
                  <FiTrash className="trash" />
                </div>
                <button>-</button>
                <button
                  onClick={() => setIsToggleItemQuantity(false)}
                  className="item-quantity"
                >
                  1pcs
                </button>
                <button className="plus">+</button>
              </div>
            ) : (
              <button
                onClick={() => setIsToggleItemQuantity(true)}
                className="item-quantity"
              >
                1 pcs
              </button>
            )}
          </div>
        </div>
      </div>
    </ShoppingListStyled>
  );
}

export default ShoppingList;
