import styled from "styled-components";

const HistoryDetailSkeletonStyled = styled.div`
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 2em 3em;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .item {
      display: flex;
      gap: 1em;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;

export default HistoryDetailSkeletonStyled;
