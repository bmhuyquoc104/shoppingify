import styled from "styled-components";

const AbsoluteFlexContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export { AbsoluteFlexContainerStyled };
