import styled from "styled-components"

const ItemListSkeletonStyled = styled.div`
  display: flex;
  gap:1em;
  flex-direction: column;
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
  border-radius:4px;
  padding:2em;
  .item-container {
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.125em;
    width: 100%;
  }
`
export default ItemListSkeletonStyled