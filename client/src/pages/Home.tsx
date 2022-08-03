import ItemList from "../components/ItemList/ItemList";
import { Outlet } from "react-router-dom";
import SearchSection from "../components/SearchSection/SearchSection";
import PageContainerStyled from "../components/Container/PageContainer";
function Home() {
  return (
    <PageContainerStyled
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <SearchSection />
      <ItemList />
      <Outlet />
    </PageContainerStyled>
  );
}

export default Home;
