import styled from "styled-components";

const PageContainerStyled = styled.div`
  display: grid;
  margin-left: 6em;
  gap: 1em;
  grid-template-columns: minmax(350px, 1fr) 24em;
  grid-template-rows: 15vh 1fr;
  grid-template-areas:
    "search-section shopping-cart"
    "item-list  shopping-cart";
  & :first-child {
    grid-area: search-section;
  }

  & :nth-child(2) {
    grid-area: item-list;
  }

  &:nth-child(3) {
    grid-area: shopping-cart;
  }
  @media (max-width: 1137px) {
    grid-template-columns: minmax(500px, 1fr) 1fr;
  }
  @media (max-width: 928px) {
    grid-template-rows: 27vh 1fr;
  }
  @media (max-width: 909px) {
    grid-template-rows: 27vh 1fr;
    grid-template-columns: minmax(350px, 1fr) 1fr;
  }
  @media (max-width:750px){
    grid-template-columns:1fr;
    grid-template-areas:
    "search-section"
    "item-list"
    "shopping-cart";
  }
`;

export default PageContainerStyled;
