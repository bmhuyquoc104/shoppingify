import styled from "styled-components";

const CancelStyled = styled.div`
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
  }
  p {
    width: 26ch;
    color: ${({ theme }) => theme.heading1.color};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 30px;
  }
  .controller {
    margin-left: auto;
    display: flex;
    gap: 2em;
    font-size: 1rem;
    align-items: center;
    .cancel {
      background-color: transparent;
      color: ${({ theme }) => theme.heading1.color};
      border: none;
    }
    .yes {
      font-weight: 700;
      font-size: 1rem;
      background-color: #eb5757;
      color: ${({ theme }) => theme.header.backgroundColor};
      padding: 1.25em;
      border: none;
      border-radius: 12px;
    }
  }
`;

export default CancelStyled;
