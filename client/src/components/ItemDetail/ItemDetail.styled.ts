import styled from "styled-components";

const ItemDetailStyled = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  flex-direction: column;
  gap: 2em;
  padding: 2em 2.5em;
  position: fixed;
  right: 0;
  width: 24em;
  .back {
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: transparent;
    border: transparent;
    color: #f9a109;
    :hover {
      cursor: pointer;
    }
    & > * {
      color: #f9a109;
      font-size: 0.875rem;
      font-weight: 700;
    }
  }
  .main-content {
    display: flex;
    flex-direction: column;
    height: 75vh;
    overflow-y: scroll;
  }

  .item-image {
    width: 100%;
    height: 220px;
    img {
      width: 100%;
      object-fit: contain;
      height: 100%;
      border-radius: 25px;
    }
  }
  .item-detail {
    display: flex;
    flex-direction: column;
    h3 {
      color: ${({ theme }) => theme.placeholder.color};
      font-size: 0.8rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 1.5em;
    }
    gap: 1.75em;
    p {
      color: ${({ theme }) => theme.text.color};
      font-weight: 500;
      line-height: 22px;
      font-size: 1.125rem;
    }
    .name {
      font-size: 1.5rem;
    }
  }
  .controller {
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;
    button:hover {
      cursor: pointer;
    }
    .delete {
      font-weight: 700;
      font-size: 1rem;
      color: ${({ theme }) => theme.heading1.color};
      background-color: transparent;
      border: transparent;
    }
    .add {
      font-weight: 700;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.button.backgroundColor};
      color: ${({ theme }) => theme.header.backgroundColor};
      padding: 1.5em;
      border: none;
      border-radius: 12px;
    }
  }
  @media (max-width: 750px) {
    width: 100%;
    position: revert;
    min-height: auto;
    right: revert;
    .main-content {
      height: auto;
    }
  }
`;

const ItemDetailSkeletonStyled = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.skeleton.wrapper.backgroundColor};
  flex-direction: column;
  gap: 2em;
  padding: 2em 2.5em;
  position: fixed;
  right: 0;
  width: 24em;
  .back {
    display: flex;
    align-items: center;
    width: 3em;
    border: none;
    height: 1em;
    background-color: ${({ theme }) => theme.skeleton.backgroundColor};
  }
  .main-content {
    display: flex;
    flex-direction: column;
    height: 75vh;
    gap: 2em;
    overflow-y: scroll;
  }

  .item-image {
    width: 100%;
    height: 220px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.skeleton.backgroundColor};
  }

  .item-detail {
    display: flex;
    flex-direction: column;
    gap: 1.75em;
    height: 50vh;
    h3 {
      background-color: ${({ theme }) => theme.skeleton.backgroundColor};
      width: 4em;
      height: 15px;
    }
    p {
      background-color: ${({ theme }) => theme.skeleton.backgroundColor};
      width: 100%;
      height: 30px;
    }
    .category {
      height: 25vh !important;
    }
  }
  .controller {
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;
    .add,
    .delete {
      font-weight: 700;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.skeleton.backgroundColor};
      padding: 1.5em 2.5em;
      border: none;
      border-radius: 12px;
    }
  }
  @media (max-width: 750px) {
    width: 100%;
    position: revert;
    min-height: auto;
    right: revert;
    .main-content {
      height: auto;
    }
  }
`;

export { ItemDetailStyled, ItemDetailSkeletonStyled };
