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

  // Declare state to track category
  const [categories, setCategories] = useState<Item[] | any>([]);
  // Declare state to track item-quantity
  const [isToggleItemQuantity, setIsToggleItemQuantity] = useState(false);
  // Declare use effect
  useEffect(() => {
    const arrOfProperty = [
      ...new Set(itemChoice.map((item: Item) => item.category)),
    ];
    setCategories(arrOfProperty);
  }, [itemChoice]);
  return (
    <ShoppingListStyled>
      <div className="shopping-list-title">
        <h2>Shopping list</h2>
        <RiPencilFill />
      </div>
      <div className="item-category">
        {categories?.map((category: string, index: number) => (
          <>
            <h3 key={index}>{category}</h3>
            {itemChoice
              ?.filter((item: Item) => item.category === category)
              ?.map((item: Item) => (
                <div className="item-container">
                  <div className="item-name">{item?.name}</div>
                  <div className="item-controller">
                    {isToggleItemQuantity ? (
                      <div className="item-controller active">
                        {" "}
                        <div
                          onClick={() => dispatch(deleteItemChoice(item.name))}
                          className="trash-container"
                        >
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
              ))}
          </>
        ))}
      </div>
    </ShoppingListStyled>
  );
}

export default ShoppingList;
