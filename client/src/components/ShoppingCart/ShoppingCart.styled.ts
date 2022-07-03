import styled from "styled-components";

const ShoppingCartStyled = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  flex-direction: column;
  .shopping-list {
    padding: 2em;
    background-color: ${({ theme }) => theme.shoppingList.backgroundColor};
    display: flex;
    justify-content: space-between;

    flex-direction: column;
    gap: 2em;
    height: 85vh;
    .cart-banner {
      position: relative;
      background-color: #80485b;
      border-radius: 24px;
      display: flex;
      height: 130px;
      gap: 1em;

      img {
        position: absolute;
        top: -1.5vh;
        bottom: 0;
        left: 7px;
        height: 100%;
        object-fit: contain;
      }
      .banner-content {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        margin-top: auto;
        margin-bottom: auto;
        gap: 1em;
        font-weight: 700;

        p {
          color: ${({ theme }) => theme.header.backgroundColor};
          font-size: 1rem;
          width: 20ch;
        }
        button {
          width: 65%;
          background-color: ${({ theme }) => theme.header.backgroundColor};
          color: ${({ theme }) => theme.heading1.color};
          font-size: 0.875rem;
          padding: 0.75em 1.25em;
          border-radius: 12px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.04);
          text-align: center;
        }
      }
    }
    .shopping-list-content {
      align-self: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.heading1.color};
    }
    .cart-logo{
      align-self: center;
      position: relative;
      width: 100%;
      img{
        left:2vw;
        width:80%;
        object-fit:contain;
        position: absolute;
        bottom:-4.5vh;
      }
    }
  }

  .shopping-controller {
    margin: auto;
    border: 1px solid ${({ theme }) => theme.placeholder.color};
    background-color: ${({ theme }) => theme.header.backgroundColor};
    border-radius: 12px;
    display: flex;

    input {
      background-color: transparent;
      padding: 0.45em 4em;
      padding-left: 1.5em;
      color: ${({ theme }) => theme.heading1.color};
      font-weight: 500;
      font-size: 0.875rem;
      outline: none;
      border: none;
    }
    input::placeholder {
      color: ${({ theme }) => theme.placeholder.color};
    }

    button {
      padding: 1.35em 2em;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.placeholder.color};
      color: ${({ theme }) => theme.header.backgroundColor};
    }
  }
`;

export default ShoppingCartStyled;
