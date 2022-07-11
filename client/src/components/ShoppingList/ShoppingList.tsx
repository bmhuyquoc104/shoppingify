import { RiPencilFill } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import { BsCheck2 } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState, useContext } from "react";
import ShoppingListStyled from "./ShoppingList.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemChoice,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/ItemSelected";
import { addItem } from "../../features/ShoppingDetail";
import { Item } from "../../models/Item";
import { ToggleContext } from "../../hooks/useToggleContext";

function ShoppingList() {
  // Declare use selector and use dispatch to use the value and action in the item reducer
  const itemChoice = useSelector((state: any) => state.itemSelected);
  const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  console.log(itemChoice);
  // const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  // console.log(shoppingDetail);
  const dispatch = useDispatch();

  // Declare state to track category status
  const [categories, setCategories] = useState<Item[] | any>([]);
  // Declare state to track item-quantity status
  const [isToggleItemQuantity, setIsToggleItemQuantity] = useState<string[]>(
    []
  );
  // Declare state to track select square in edit mode status
  const [isCheckedItems, setIsCheckedItems] = useState<string[]>([]);

  // Function to check whether this select item is checked or not
  const handleAdd = (name: string) => {
    if (!isCheckedItems.includes(name)) {
      setIsCheckedItems([...isCheckedItems, name]);
    } else {
      setIsCheckedItems(isCheckedItems.filter((item) => item !== name));
    }
  };

  // Function to check whether this item is toggle item quantity or not
  const handleToggleItemQuantity = (name: string) => {
    if (!isToggleItemQuantity.includes(name)) {
      setIsToggleItemQuantity([...isToggleItemQuantity, name]);
    } else {
      setIsToggleItemQuantity(
        isToggleItemQuantity.filter((item: string) => item !== name)
      );
    }
  };

  // Declare use effect
  useEffect(() => {
    const arrOfProperty = [
      ...new Set(itemChoice.map((item: Item) => item.category)),
    ];
    setCategories(arrOfProperty);
  }, [itemChoice]);

  //Get the properties from the useContext
  const { isToggleEdit, setIsToggleEdit } = useContext(ToggleContext);
  console.log(itemChoice);

  return (
    <ShoppingListStyled>
      <div className="shopping-list-title">
        <h2>Shopping list</h2>
        {isToggleEdit ? (
          <GrCompliance onClick={() => setIsToggleEdit(false)} />
        ) : (
          <RiPencilFill onClick={() => setIsToggleEdit(true)} />
        )}
      </div>
      <div className="item-category">
        {categories?.map((category: string, index: number) => (
          <>
            <h3 key={index}>{category}</h3>
            {itemChoice
              ?.filter((item: Item) => item.category === category)
              ?.map((item: Item) => (
                <div key={item._id} className="item-container">
                  {isToggleEdit ? (
                    <div key={item._id} className="edit-name">
                      <div
                        onClick={() => handleAdd(item.name)}
                        className={
                          isCheckedItems.includes(item.name)
                            ? "square-checked"
                            : "square"
                        }
                      >
                        <BsCheck2 />
                      </div>
                      <div
                        className={`item-name ${
                          isCheckedItems.includes(item.name) && "checked"
                        }`}
                      >
                        {item?.name}
                      </div>
                    </div>
                  ) : (
                    <div className="item-name">{item?.name}</div>
                  )}
                  {!isToggleEdit ? (
                    <div className="item-controller">
                      {isToggleItemQuantity.includes(item.name) ? (
                        <div className="item-controller active">
                          {" "}
                          <div
                            onClick={() =>
                              dispatch(deleteItemChoice(item.name))
                            }
                            className="trash-container"
                          >
                            <FiTrash className="trash" />
                          </div>
                          <button
                            onClick={() =>
                              dispatch(decreaseQuantity(item.name))
                            }
                          >
                            -
                          </button>
                          <button
                            onClick={() => handleToggleItemQuantity(item.name)}
                            className="item-quantity"
                          >
                            {item?.quantity}pcs
                          </button>
                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(item.name))
                            }
                            className="plus"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleToggleItemQuantity(item?.name)}
                          className="item-quantity"
                        >
                          {item?.quantity}pcs
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="item-controller">
                      <button className="item-quantity">
                        {item.quantity}pcs
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </>
        ))}
      </div>
    </ShoppingListStyled>
  );
}

export default ShoppingList;
