import ItemList from "../components/ItemList/ItemList";
import { Outlet } from "react-router-dom";
import SearchSection from "../components/SearchSection/SearchSection";
import PageContainerStyled from "../components/Container/PageContainer";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
function Home() {
  return (
    <PageContainerStyled>
      <SearchSection />
      <ItemList />
      {/* <ShoppingCart /> */}
      <Outlet />
    </PageContainerStyled>
  );
}

export default Home;
