import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useGetAllItems, useGetItemByName } from "../../hooks/useItems";
import { Item } from "../../models/Item";
import { addUniqueItem } from "../../features/ItemSelected";
import ItemListStyled from "./ItemList.styled";
import ItemListSkeleton from "../Skeleton/ItemListSkeleton/ItemListSkeleton";

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

  // Display when data is error
  if (isError) {
    <h1>{`Error: ${error}`}</h1>;
  }
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

  // Declare animation for ul
  const ulVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Declare animation for li
  const liVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <ItemListStyled>
      {categories?.map((category: String, index: number) => (
        <motion.div
          variants={ulVariant}
          animate="show"
          initial="hidden"
          className="category-container"
          key={index}
        >
          <h2>{category}</h2>
          <ul className="item-container">
            {items
              ?.filter((item: Item) => item.category === category)
              ?.map((item: Item) => (
                <motion.li
                  variants={liVariant}
                  key={item._id}
                >
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
                </motion.li>
              ))}
          </ul>
        </motion.div>
      ))}
      {isLoading && (
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {[1, 2, 3].map((n: number) => (
            <ItemListSkeleton key={n}></ItemListSkeleton>
          ))}
        </div>
      )}
    </ItemListStyled>
  );
}

export default ItemList;
