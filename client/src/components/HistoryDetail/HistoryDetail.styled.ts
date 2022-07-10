import styled from "styled-components";

const HistoryDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 2em 3em;

  .back {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: ${({ theme }) => theme.button.backgroundColor};
    cursor: pointer;
    button {
      font-size: 0.875rem;
      font-weight: 700;
      background-color: transparent;
      color: ${({ theme }) => theme.button.backgroundColor};
      border: none;
      cursor: pointer;
    }
    &:first-child {
      font-size: 1rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    h2 {
      font-weight: 700;
      font-size: 1.625rem;
      color: ${({ theme }) => theme.heading1.color};
    }
    .calendar {
      & > :first-child {
        font-size: 1.2rem;
      }
      grid-area: calendar;
      display: flex;
      gap: 1em;
      color: ${({ theme }) => theme.placeholder.color};
      font-size: 0.75rem;
      align-items: center;
      margin-bottom: 1em;
    }
    .item-container {
      display: flex;
      flex-direction: column;
      gap: 3em;
      & > * {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
      .item.category {
        font-weight: 500;
        color: ${({ theme }) => theme.text.color};
        font-size: 1.2rem;
      }
      .item {
        display: flex;
        gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        .item-name {
          display: flex;
          width: 11.375rem;
          justify-content: space-around;
          align-items: center;
          border-radius: 12px;
          background-color: ${({ theme }) => theme.header.backgroundColor};
          padding: 0.75em;
          .name {
            font-size: 1rem;
            font-weight: 500;
            width: 10ch;
          }
          .quantity {
            color: ${({ theme }) => theme.button.backgroundColor};
            font-size: 0.75rem;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export default HistoryDetailStyled;
