import styled from "styled-components";

const HistorySkeletonStyled = styled.div`
  padding: 1em;
  display: flex;
  gap:1em;
  flex-direction: column;
  .container {
    padding:2em 1em;
    display: grid;
    background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
    opacity: 0.8;
    border-radius: 12px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    grid-template-columns: 1fr 8em 5em min-content;
    gap: 1em;
    align-items: center;
    grid-template-areas: "name calendar status arrow";
    .name {
      grid-area: name;
    }
    .calendar {
      grid-area: calendar;
    }
    .status {
      grid-area: status;
    }
    .arrow {
      grid-area: arrow;
    }
  }
  @media (max-width: 1060px) and (min-width: 750px) {
    padding: 2em 0em;
    .container {
      grid-template-columns: 1fr min-content;
      grid-template-areas:
        "name arrow"
        "calendar status";
      .arrow {
        justify-self: end;
      }
    }
  }

  @media (max-width: 650px) {
    padding: 2em 1.5em;
    .container {
      grid-template-columns: 1fr min-content;
      grid-template-areas:
        "name arrow"
        "calendar status";
      .arrow {
        justify-self: end;
      }
    }
  }
`;

export default HistorySkeletonStyled;
