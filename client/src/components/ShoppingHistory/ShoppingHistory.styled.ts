import styled from "styled-components";

const ShoppingHistoryStyled = styled.section`
  padding: 2em 3em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h2 {
    color: ${({ theme }) => theme.heading1.color};
    font-weight: 700;
    font-size: 1.625rem;
  }
`;

export default ShoppingHistoryStyled;
