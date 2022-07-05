import React from "react";
import SearchSection from "../components/SearchSection/SearchSection";
import ItemList from "../components/ItemList/ItemList";
import ItemDetailComponent from "../components/ItemDetail/ItemDetail";
import PageContainerStyled from "../components/Container/PageContainer";

function ItemDetail() {
  return (
    <PageContainerStyled>
      <SearchSection />
      <ItemList />
      <ItemDetailComponent />
    </PageContainerStyled>
  );
}

export default ItemDetail;
