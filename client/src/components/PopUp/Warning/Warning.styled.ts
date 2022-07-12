import styled from "styled-components";

const WarningStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border-radius: 24px;
  padding: 1em 1.75em 2em 2em;
  .close {
    align-self: flex-end;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.placeholder.color};
    cursor: pointer;
  }
  p {
    width: 26ch;
    color: ${({ theme }) => theme.heading1.color};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 30px;
  }

  @media (max-width: 750px) {
    padding: 1em 1.25em 2em 1.75em;
    gap: 0.75em;
    p {
      width: 24ch;
      font-size: 1.25rem;
    }
  }
`;

export default WarningStyled;
