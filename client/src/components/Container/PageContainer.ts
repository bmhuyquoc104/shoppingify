import styled from "styled-components";
import {motion} from "framer-motion"

const PageContainerStyled = styled(motion.div)`
  display: grid;
  margin-left: 6em;
  gap: 1em;
  grid-template-columns: minmax(350px, 1fr) 24em;
  grid-template-rows: 16vh 1fr;
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
    grid-template-columns: minmax(500px, 1fr) 24em;
  }
  
  @media (max-width: 909px) {
    grid-template-columns: minmax(350px, 1fr) 24em;
  }
  @media (max-width:750px){
    margin-left: 5.2em;
    grid-template-columns:1fr;
    grid-template-areas:
    "search-section"
    "item-list"
    "shopping-cart";
  }
  @media (max-width:480px){
    margin-left:3.5em;
  }
`;

export default PageContainerStyled;
