import styled from "styled-components";

const ShoppingListStyled = styled.div`
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  .shopping-list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.heading1.color};
    }
    & > *:nth-child(2) {
      cursor: pointer;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.heading1.color};
    }
  }
  .item-category {
    display: flex;
    flex-direction: column;
    gap: 1em;
    h3 {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.placeholder.color};
      font-weight: 500;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }
    .item-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .edit-name {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.75em;
        .square {
          width: 24px;
          height: 24px;
          background-color: transparent;
          border: 2px solid ${({ theme }) => theme.button.backgroundColor};
          display: flex;
          align-items: center;
          justify-content: center;
          & > * {
            display: none;
          }
        }
        .square-checked {
          width: 24px;
          height: 24px;
          background-color: transparent;
          border: 2px solid ${({ theme }) => theme.button.backgroundColor};
          display: flex;
          align-items: center;
          justify-content: center;
          & > * {
            display: flex;
            color: ${({ theme }) => theme.button.backgroundColor};
          }
        }
      }
      .item-name {
        font-size: 1rem;
        color: ${({ theme }) => theme.text.color};
        font-weight: 500;
      }
      .item-name.checked {
        text-decoration: line-through;
      }
      .item-controller {
        .item-quantity {
          display: flex;
          align-items: center;
          cursor: pointer;
          justify-content: center;
          background-color: transparent;
          border-radius: 24px;
          border: 2px solid ${({ theme }) => theme.button.backgroundColor};
          padding: 0.5em 0.75em;
          font-size: 0.75rem;
          color: ${({ theme }) => theme.button.backgroundColor};
          font-weight: 700;
        }
        .active {
          display: flex;
          gap: 0.5em;
          align-items: center;
          background-color: ${({ theme }) => theme.header.backgroundColor};
          border-radius: 12px;
          height: 40px;
          .trash-container {
            border-radius: 12px;
            cursor: pointer;
            height: 100%;
            padding: 0 0.5em;
            background-color: ${({ theme }) => theme.button.backgroundColor};
            display: flex;
            align-items: center;
            justify-content: center;
            .trash {
              font-size: 0.75rem;
              color: ${({ theme }) => theme.header.backgroundColor};
            }
          }

          button {
            color: ${({ theme }) => theme.button.backgroundColor};
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 1.2rem;
          }
          .item-quantity {
            font-size: 0.75rem;
            background-color: transparent;
            border-radius: 24px;
            border: 2px solid ${({ theme }) => theme.button.backgroundColor};
            padding: 0.5em 0.75em;
            font-size: 0.75rem;
          }
          .plus {
            padding-right: 0.5em;
          }
        }
      }
    }
  }
`;

export default ShoppingListStyled;
