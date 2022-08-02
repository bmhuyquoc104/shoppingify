import styled from "styled-components";

const StatisticSkeletonStyled = styled.div`
  margin: 1em 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap:2em;
  padding: 4em 3em 0 3em;
  width: 100%;
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};

  .item {
    display: flex;
    flex-direction: column;
    gap: 1em;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default StatisticSkeletonStyled;
