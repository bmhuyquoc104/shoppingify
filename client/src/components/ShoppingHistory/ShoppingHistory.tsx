import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { useGetAllShoppingDetails } from "../../hooks/useShoppingDetail";
import ShoppingHistoryStyled from "./ShoppingHistory.styled";
import { formatDate, formatDate2 } from "../../helpers/formatDate";

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

  // Render when the data is loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Render if the data is error
  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  return (
    <ShoppingHistoryStyled>
      {daysByMonthYear?.map((day: String, index: number) => (
        <div className="container" key={index}>
          <h2>{day}</h2>
          <div className="shopping-detail-container">
            {shoppingDetails
              ?.filter(
                (shoppingDetail: any) => shoppingDetail.daysByMonthYear === day
              )
              .map((shoppingDetail: any) => (
                <div key={shoppingDetail._id}>
                  <>
                    <h3>{shoppingDetail.name}</h3>
                    <div className="date">
                      <RiCalendarTodoFill />
                      <h3>{formatDate2(shoppingDetail?.createdAt)}</h3>
                    </div>
                    <h3>{shoppingDetail.status}</h3>
                    <MdOutlineKeyboardArrowRight />
                  </>
                </div>
              ))}
          </div>
        </div>
      ))}
    </ShoppingHistoryStyled>
  );
}

export default ShoppingHistory;
