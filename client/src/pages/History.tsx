import { Outlet } from "react-router-dom";
import ShoppingHistory from "../components/ShoppingHistory/ShoppingHistory";
import HistoryContainerStyled from "../components/Container/HistoryContainer";
function History() {
  return (
    <HistoryContainerStyled
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        x:200,
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <ShoppingHistory />
      <Outlet />
    </HistoryContainerStyled>
  );
}

export default History;
