import { Outlet } from "react-router-dom";
import ShoppingHistory from "../components/ShoppingHistory/ShoppingHistory";
import HistoryContainerStyled from "../components/Container/HistoryContainer";
function History() {
  return (
    <HistoryContainerStyled>
      <ShoppingHistory />
      <Outlet />
    </HistoryContainerStyled>
  );
}

export default History;
