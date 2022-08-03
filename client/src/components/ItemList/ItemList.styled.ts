import styled from "styled-components";
import {motion} from "framer-motion"
const ItemListStyled = styled(motion.section)`
  padding: 0 3em 2em 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  h2 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text.color};
  }
  .category-container {
    display: flex;
    gap: 2em;
    flex-direction: column;
  }
  .item-container {
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.05);
    display: flex;
    flex-wrap: wrap;
    gap: 1.125em;
    width: 100%;
  }

  li {
    list-style-type: none;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    display: flex;
    padding: 0.8em 1em;
    width: max(150px, 11.375em);
    align-items: flex-start;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: ${({ theme }) => theme.text.color};
    justify-content: space-between;
    svg {
      color: ${({ theme }) => theme.plus.color};
      cursor: pointer;
    }
  }

  @media (max-width: 1137px) {
    padding: 1em 0.25em 2em 0.25em;
  }
  @media (max-width: 950px) and (min-width: 750px) {
    margin-top: 6em;
    padding: 0em 0em 2em 0em;

    li {
      width: 8em;
    }
  }

  @media (max-width: 750px) {
    padding: 2em 1.25em 2em 1.25em;
    li {
      width: 10em;
    }
  }

  @media (max-width: 560px) {
    margin-top: 3.4em;
  }
  @media (max-width: 530px) and (min-width: 400px) {
    li {
      width: 8.5em;
      font-size: 0.875rem;
    }
  }
  @media (max-width: 419px) {
    padding: 2.5em 2em 2.5em 2em;
    .item-container {
      gap: 0.5em;
    }
    li {
      width: 9em;
      font-size: 0.85rem;
    }
  }
`;

export default ItemListStyled;
