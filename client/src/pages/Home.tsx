import ItemList from "../components/ItemList/ItemList";
import { Outlet } from "react-router-dom";
import SearchSection from "../components/SearchSection/SearchSection";
import PageContainerStyled from "../components/Container/PageContainer";
function Home() {
  return (
    <PageContainerStyled>
      <SearchSection />
      <ItemList />
      <Outlet />
    </PageContainerStyled>
  );
}

export default Home;
