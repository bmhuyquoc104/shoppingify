import { RiPencilFill } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import { BsCheck2 } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { useEffect, useState, useContext } from "react";
import ShoppingListStyled from "./ShoppingList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemChoice } from "../../features/ItemSelected";
import { Item } from "../../models/Item";
import { ToggleEditContext } from "../../hooks/useToggleContext";

function ShoppingList() {
  // Declare use selector and use dispatch to use the value and action in the item reducer
  const itemChoice = useSelector((state: any) => state.itemSelected);
  const dispatch = useDispatch();

  // Declare state to track category status
  const [categories, setCategories] = useState<Item[] | any>([]);
  // Declare state to track item-quantity status
  const [isToggleItemQuantity, setIsToggleItemQuantity] = useState(false);
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


  // Declare use effect
  useEffect(() => {
    const arrOfProperty = [
      ...new Set(itemChoice.map((item: Item) => item.category)),
    ];
    setCategories(arrOfProperty);
  }, [itemChoice]);

  const { isToggleEdit, setIsToggleEdit } = useContext(ToggleEditContext);

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
                <div className="item-container">
                  {isToggleEdit ? (
                    <div className="edit-name">
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
                      <div className={`item-name ${isCheckedItems.includes(item.name) && "checked"}`}>
                        {item?.name}
                      </div>
                    </div>
                  ) : (
                    <div className="item-name">{item?.name}</div>
                  )}
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
