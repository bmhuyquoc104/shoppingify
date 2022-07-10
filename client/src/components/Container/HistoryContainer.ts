import styled from "styled-components";

const HistoryContainerStyled = styled.div`
  display: grid;
  margin-left: 6em;
  width: 100%;
  gap: 1em;
  grid-template-columns: minmax(350px, 1fr) 24em;
  grid-template-areas: "history-section shopping-cart";
  & :first-child {
    grid-area: history-section;
  }

  & :nth-child(2) {
    grid-area: shopping-cart;
  }

  @media (max-width: 1137px) {
    grid-template-columns: minmax(500px, 1fr) 24em;
  }

  @media (max-width: 990px) {
    grid-template-columns: minmax(250px, 1fr) 24em;
  }
  @media (max-width: 750px) {
    margin-left: 5.2em;
    grid-template-columns: 1fr;
    grid-template-areas:
      "history-section"
      "shopping-cart";
  }
  @media (max-width: 480px) {
    margin-left: 3.5em;
  }
`;

export default HistoryContainerStyled;
