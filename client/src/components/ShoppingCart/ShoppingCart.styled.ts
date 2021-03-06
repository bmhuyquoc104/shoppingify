import styled from "styled-components";

const ShoppingCartStyled = styled.section`
  position: fixed;
  right: 0;
  width: 24em;
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
      overflow-y: scroll;
      align-self: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.heading1.color};
      .active {
      }
    }
    .shopping-list-content.active {
      align-self: revert;
      height: 60vh;
    }
    .cart-logo {
      align-self: center;
      position: relative;
      width: 100%;
      img {
        left: 2vw;
        width: 80%;
        object-fit: contain;
        position: absolute;
        bottom: -4.5vh;
      }
    }
  }

  .shopping-controller {
    :focus-within {
      border: 1px solid ${({ theme }) => theme.button.backgroundColor};
      button {
        background-color: ${({ theme }) => theme.button.backgroundColor};
      }
    }
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
      cursor: pointer;
    }
  }
  .shopping-controller.complete {
    display: flex;
    justify-content: center;
    gap: 1em;
    align-items: center;
    border:none;
    button:hover {
      cursor: pointer;
    }
    .cancel {
      font-weight: 700;
      font-size: 1rem;
      color: ${({ theme }) => theme.heading1.color};
      background-color: transparent;
      border: transparent;
    }
    .complete {
      font-weight: 700;
      font-size: 1rem;
      background-color: #56ccf2;
      color: ${({ theme }) => theme.header.backgroundColor};
      padding: 1.5em;
      border: none;
      border-radius: 12px;
    }
  }
  @media (max-width: 750px) {
    position: revert;
    width: 100%;
    right: revert;
    .shopping-list {
      padding: 2em 1em 2em 1.5em;

      height: 100vh;
      .cart-banner {
        .banner-content {
          p {
            width: 30ch;
          }
          button {
            width: max-content;
          }
        }
      }
    }
    .shopping-controller {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
      input {
        padding: 0.45em 2em;
        padding-left: 1em;
      }
    }
  }
  @media (max-width: 560px) {
    .shopping-list {
      .cart-banner {
        .banner-content {
          margin-right: 3em;

          p {
            width: 14ch;
          }
          button {
            width: max-content;
          }
        }
      }
    }
  }
  @media (max-width: 420px) {
    .shopping-list {
      height: 100vh;
      .cart-banner {
        .banner-content {
          margin-right: 2em;

          p {
            width: 14ch;
          }
          button {
            width: max-content;
          }
        }
      }
    }
  }
`;

export default ShoppingCartStyled;
