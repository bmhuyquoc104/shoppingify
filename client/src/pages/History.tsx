import { Outlet } from "react-router-dom";
import ShoppingHistory from "../components/ShoppingHistory/ShoppingHistory";
import PageContainerStyled from "../components/Container/PageContainer";
function History() {
  return (
    <PageContainerStyled>
      <ShoppingHistory />
      <Outlet/>
    </PageContainerStyled>
  );
}

export default History;
