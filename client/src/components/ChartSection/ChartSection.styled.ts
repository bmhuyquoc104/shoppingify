import styled from "styled-components";

const ChartSectionStyled = styled.section`
  padding: 2em 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  h2 {
    color: ${({ theme }) => theme.text.color};
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const ChartSectionSkeletonStyled = styled.section`
  padding: 2em 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
  border-radius: 4px;
`;

export { ChartSectionStyled, ChartSectionSkeletonStyled };
