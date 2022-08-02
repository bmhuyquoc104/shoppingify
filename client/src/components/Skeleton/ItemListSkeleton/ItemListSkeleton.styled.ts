import styled from "styled-components";

const ItemListSkeletonStyled = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
  border-radius: 4px;
  padding: 2em;
  .item-container {
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.125em;
    width: 100%;
  }
  @media (max-width: 1137px) {
      padding: 1em 0em 2em 0em;
    }
    @media (max-width: 950px) and (min-width: 750px) {
      padding: 1em 0em 1em 0em;
    }

    @media (max-width: 750px) {
      padding: 1em 0.5em 1em 0.5em;
      .item-container{
        gap:0.5em;
      }
    }

    @media (max-width: 419px) {
      padding: 0.25em 1em 0.25em 1em;
      .item-container{
        gap:0.5em;
      }
    }
`;
export default ItemListSkeletonStyled;
