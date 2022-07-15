import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useGetAllItems, useGetItemByName } from "../../hooks/useItems";
import { Item } from "../../models/Item";
import { addUniqueItem } from "../../features/ItemSelected";
import ItemListStyled from "./ItemList.styled";

function ItemList() {
  // Declare useDispatch to use function in the redux store
  const dispatch = useDispatch();
  // Declare navigate for routing
  const navigate = useNavigate();
  // Get properties from the custom hook
  const [query, setQuery] = useState("");
  const {
    data: items,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllItems();
  if (isLoading) {
    <h1>Loading ...</h1>;
  }
  // Display when data is loading
  if (isLoading) {
    <div>loading</div>;
  }
  // Display when data is error
  if (isError) {
    <h1>{`Error: ${error}`}</h1>;
  }
  console.log(items);
  // Declare state for categories
  const [categories, setCategories] = useState<any>([]);
  // Use effect to assign value to categories when the data is fetch successfully
  useEffect(() => {
    if (isSuccess) {
      const arr = [...new Set(items?.map((item: Item) => item.category))];
      setCategories(arr);
    }
  }, [items]);

  // Check if the fetch data has error or not
  if (isError) {
    <h1>{`Error:${error}`}</h1>;
  }
  return (
    <ItemListStyled>
      {categories?.map((category: String, index: number) => (
        <div className="category-container" key={index}>
          <h2>{category}</h2>
          <ul className="item-container">
            {items
              ?.filter((item: Item) => item.category === category)
              ?.map((item: Item) => (
                <li key={item._id}>
                  <>
                    <p onClick={() => navigate(`${item._id}`)}>{item.name}</p>
                    <AiOutlinePlus
                      onClick={() =>
                        dispatch(
                          addUniqueItem({
                            name: item.name,
                            note: item.note,
                            category: item.category,
                            image: item.image,
                            quantity: 1,
                          })
                        )
                      }
                    />
                  </>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </ItemListStyled>
  );
}

export default ItemList;
