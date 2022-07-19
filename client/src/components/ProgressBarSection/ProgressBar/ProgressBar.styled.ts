import styled from "styled-components";

type ProgressBarProps = {
  completed: string;
  bgColor: string;
};

const ProgressBarStyled = styled.div<ProgressBarProps>`
  height: 6px;
  border-radius: 4px;
  width: 100%;
  background-color: #e0e0e0;
  .filterStyles {
    height: 100%;
    width: ${({ completed }) => completed || 0};
    background-color: ${({ bgColor }) => bgColor || "transparent"};
    border-radius: inherit;
  }
`;

export default ProgressBarStyled;
