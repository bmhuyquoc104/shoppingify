import { useParams, useNavigate } from "react-router-dom";
import { RiCalendarTodoFill } from "react-icons/ri";
import { MdKeyboardBackspace } from "react-icons/md";
import { useState, useEffect } from "react";
import { useGetShoppingDetailById } from "../../hooks/useShoppingDetail";
import { ShoppingDetail } from "../../models/ShoppingDetail";
import { formatDate2 } from "../../helpers/formatDate";
import HistoryDetailStyled from "./HistoryDetail.styled";
import { ItemList } from "../../models/Item";

function HistoryDetail() {
  //Declare navigate for routing
  const navigate = useNavigate();

  // Get the params from the url
  const { id } = useParams();

  // Get the property from the custom hook
  const {
    data: detail,
    isLoading,
    isError,
    error,
  } = useGetShoppingDetailById(id!);

  //Declare use state for check category status
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const arr = [
      ...new Set(detail?.items?.map((item: ItemList) => item.category)),
    ];
    setCategories(arr);
  }, [detail]);

  // Render when data is loading
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  // Render when data is error
  if (isError) {
    return <h1>{`Error:${error}`}</h1>;
  }

  return (
    <HistoryDetailStyled>
      <div onClick={() => navigate(-1)} className="back">
        <MdKeyboardBackspace />

        <button>back</button>
      </div>
      <div className="container">
        <h2>{detail?.shoppingDetailName}</h2>
        <div className="calendar">
          <RiCalendarTodoFill />
          <h3>{formatDate2(detail?.createdAt)}</h3>
        </div>
        <div className="item-container">
          {categories?.map((category: string, index: number) => (
            <div>
              <h3 className="item category">{category}</h3>
              <div className="item">
                {detail?.items
                  .filter((item: ItemList) => item.category === category)
                  .map((item: ItemList) => (
                    <div className="item-name">
                      <h3 className="name">{item?.name}</h3>
                      <h3 className="quantity">{item?.quantity} pcs</h3>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </HistoryDetailStyled>
  );
}

export default HistoryDetail;
