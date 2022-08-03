import React from "react";
import SearchSection from "../components/SearchSection/SearchSection";
import ItemList from "../components/ItemList/ItemList";
import ItemDetailComponent from "../components/ItemDetail/ItemDetail";
import PageContainerStyled from "../components/Container/PageContainer";

function ItemDetail() {
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
      <ItemDetailComponent />
    </PageContainerStyled>
  );
}

export default ItemDetail;
