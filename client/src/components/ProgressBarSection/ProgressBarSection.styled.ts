import styled from "styled-components";

const ProgressBarStyled = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2em 3em;
  width: 100%;

  .container {
    width: 45%;

    display: flex;
    flex-direction: column;
    gap: 2em;
   
  }
  h2 {
    color: ${({ theme }) => theme.text.color};
    font-weight: 500;
    font-size: 1.5rem;
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        color: ${({ theme }) => theme.text.color};
        font-size: 0.875rem;
        font-weight: 500;
      }
      .percentage {
        color: ${({ theme }) => theme.text.color};
        font-size: 1.125rem;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 969px){
    flex-direction: column;
    justify-content:revert;
    gap:3em;
    .container{
      width: 100%;
    }
  }
`;

export default ProgressBarStyled;
