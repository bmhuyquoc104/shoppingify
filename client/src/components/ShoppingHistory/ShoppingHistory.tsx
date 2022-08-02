import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useGetAllShoppingDetails } from "../../hooks/useShoppingDetail";
import ShoppingHistoryStyled from "./ShoppingHistory.styled";
import { formatDate, formatDate2 } from "../../helpers/formatDate";
import HistorySkeleton from "../Skeleton/History/History"
function ShoppingHistory() {
  // Declare property from the custom hook
  const {
    data: shoppingDetails,
    isLoading,
    isError,
    error,
  } = useGetAllShoppingDetails();

  // Declare state for tracking the dateByMonthYear status
  const [daysByMonthYear, setDaysByMonthYear] = useState<any>();

  useEffect(() => {
    shoppingDetails?.forEach((element: any) => {
      element.daysByMonthYear = formatDate(element.createdAt);
    });
    const arr = [
      ...new Set(
        shoppingDetails?.map(
          (shoppingDetail: any) => shoppingDetail.daysByMonthYear
        )
      ),
    ];
    setDaysByMonthYear(arr);
  }, [shoppingDetails]);

  // Declare navigate for routing
  const navigate = useNavigate();


  // Render if the data is error
  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  return (
    <ShoppingHistoryStyled>
      <h2>Shopping history</h2>
      {isLoading && 
      <div style = {{display:"flex", gap:"1em",flexDirection:"column"}}>
        {[1,2,3].map((n:number) => (
          <HistorySkeleton key={n}></HistorySkeleton>
        ))}
        </div>}
      {daysByMonthYear?.map((day: String, index: number) => (
        <div className="container" key={index}>
          <h2>{day}</h2>
          <div className="shopping-details-container">
            {shoppingDetails
              ?.filter(
                (shoppingDetail: any) => shoppingDetail.daysByMonthYear === day
              )
              .map((shoppingDetail: any) => (
                <div
                  className="shopping-detail-container"
                  key={shoppingDetail._id}
                >
                  <h3 className="name">{shoppingDetail.shoppingDetailName}</h3>
                  <div className="calendar">
                    <RiCalendarTodoFill />
                    <h3>{formatDate2(shoppingDetail?.createdAt)}</h3>
                  </div>
                  <h3
                    className={
                      shoppingDetail?.status === "completed"
                        ? "status"
                        : "status cancel"
                    }
                  >
                    {shoppingDetail.status}
                  </h3>
                  <MdOutlineKeyboardArrowRight
                    onClick={() => navigate(`history-detail/${shoppingDetail._id}`)}
                    className="arrow"
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </ShoppingHistoryStyled>
  );
}

export default ShoppingHistory;
