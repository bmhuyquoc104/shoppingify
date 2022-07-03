import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useGetAllItems } from "../../hooks/useItems";
import { Item } from "../../models/Item";
import ItemListStyled from "./ItemList.styled";
function ItemList() {
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
  const [categories, setCategories] = useState<any>([]);
  useEffect(() => {
    if (isSuccess) {
      console.log("huy");
      const arr = [...new Set(items.map((item: Item) => item.category))];
      setCategories(arr);
    }
  }, [items]);
  console.log(items);

  if (isError) {
    <h1>{`Error:${error}`}</h1>;
  }
  return (
    <ItemListStyled>
      {categories?.map((category: String, index: number) => (
        <div className = "category-container" key={index}>
          <h2>{category}</h2>
          <ul className="item-container">
            {items
              ?.filter((item: Item) => item.category === category)
              .map((item: Item) => (
                <li key={item._id}>
                  <>
                    {item.name}
                    <AiOutlinePlus />
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
