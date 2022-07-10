import styled from "styled-components";

const ShoppingHistoryStyled = styled.section`
  padding: 2em 3em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  h2 {
    color: ${({ theme }) => theme.heading1.color};
    font-weight: 700;
    font-size: 1.625rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.85em;
    h2 {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text.color};
    }
    .shopping-details-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5em;
      .shopping-detail-container {
        display: grid;
        background-color: ${({ theme }) => theme.header.backgroundColor};
        padding: 1em;
        border-radius: 12px;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
        grid-template-columns: 1fr 8em 5em min-content;
        grid-template-areas: "name calendar status arrow";
        gap: 1em;
        align-items: center;
        .name {
          grid-area: name;
          font-size: 1rem;
          font-weight: 500;
          color: ${({ theme }) => theme.text.color};
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
        }
        .status {
          grid-area: status;
          background-color: transparent;
          border: 1px solid #56ccf2;
          border-radius: 8px;
          padding: 0.5em 0.75em;
          text-align: center;
          color: #56ccf2;
          font-size: 0.75rem;
        }
        .status.cancel{
          border: 1px solid #eb5757;
          color: #eb5757;
        }
        .arrow {
          grid-area: arrow;
          font-size: 2rem;
          color: ${({ theme }) => theme.button.backgroundColor};
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 1060px) and (min-width: 750px) {
    padding: 2em 0em;
    .container {
      .shopping-details-container {
        .shopping-detail-container {
          grid-template-columns: 1fr min-content;
          grid-template-areas:
            "name arrow"
            "calendar status";
        }
        .arrow {
          justify-self: end;
        }
      }
    }
  }

  @media (max-width: 650px) {
    padding: 2em 1.5em;
    .container {
      .shopping-details-container {
        .shopping-detail-container {
          grid-template-columns: 1fr min-content;
          grid-template-areas:
            "name arrow"
            "calendar status";
        }
        .arrow {
          justify-self: end;
        }
      }
    }
  }
`;

export default ShoppingHistoryStyled;
