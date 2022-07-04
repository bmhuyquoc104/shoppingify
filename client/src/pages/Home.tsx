import ItemList from "../components/ItemList/ItemList";
import SearchSection from "../components/SearchSection/SearchSection";
import PageContainerStyled from "../components/Container/PageContainer";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
function Home() {
  return (
    <PageContainerStyled>
      <SearchSection />
      <ItemList />
      <ShoppingCart />
    </PageContainerStyled>
  );
}

export default Home;
