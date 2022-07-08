import styled from "styled-components";
import { imageResources } from "../../assets/imageResources";
const FormStyled = styled.form`
  position: fixed;
  right: 0;
  width: 24em;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.25em 2em;
  gap: 2em;
  .title {
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text.color};
    }
  }
  .form-content {
    height: 70vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    & > * {
      display: flex;
      flex-direction: column;
      gap: 0.7em;
    }
    label,
    h3 {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.heading1.color};
      cursor: pointer;
    }
    h3 {
      margin-bottom: -0.5em;
    }
    & > * {
      &:focus-within {
        label {
          color: ${({ theme }) => theme.button.backgroundColor};
        }
      }
    }
    input {
      padding: 1.75em 1em;
      font-size: 0.875rem;
      width: 100%;
      font-weight: 500;
      color: ${({ theme }) => theme.placeholder.color};
      outline: none;
      border: 2px solid ${({ theme }) => theme.placeholder.color};
      border-radius: 12px;
      background-color: ${({ theme }) => theme.body.backgroundColor};
      ::placeholder {
        color: ${({ theme }) => theme.placeholder.color};
      }
      :focus {
        border: 2px solid ${({ theme }) => theme.button.backgroundColor};
      }
    }

    .note input {
      padding: 1.75em 1em 4.75em 1em;
    }
    .category {
      display: flex;
      width: 100%;
      flex-direction: column;
      font-weight: 500;
      gap: 1rem;
      position: relative;
      input {
        position: relative;
      }
      p {
        cursor: pointer;
      }
      .icon-close {
        font-size: 1.4rem;
        position: absolute;
        right:1em;
        bottom:1em;
      }

      .options {
        position: absolute;
        top: 14vh;
        left: 0;
        width: 100%;
        padding: 1.75em 1em;
        background-color: ${({ theme }) => theme.header.backgroundColor};
        border-radius: 12px;
        border: 1px solid #e0e0e0;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
        ul {
          display: flex;
          flex-direction: column;
        }
        li {
          list-style-type: none;
          color: ${({ theme }) => theme.shoppingList.category.color};
          font-size: 1.125rem;
          padding: 0.35em 1em;

          font-weight: 500;
          :hover {
            background-color: ${({ theme }) =>
              theme.shoppingList.list.backgroundColor};
            border-radius: 12px;
            color: ${({ theme }) => theme.heading1.color};
          }
        }
      }
    }
  }
  .input-category {
    border: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    font-size: 1rem !important;
    padding: 0.35em 1em !important;
  }
  .controller {
    display: flex;
    justify-content: center;
    gap: 2em;
    align-items: center;
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
    .save {
      font-weight: 700;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.button.backgroundColor};
      color: ${({ theme }) => theme.header.backgroundColor};
      padding: 1.5em;
      border: none;
      border-radius: 12px;
    }
  }
  .error{
    color:#EB5757;
    font-weight: 700;
    font-style:italic;
    font-size: 0.675rem;
  }
  @media (max-width: 750px) {
    right: revert;
    position: revert;
    width: 100%;
  }
`;

export default FormStyled;
