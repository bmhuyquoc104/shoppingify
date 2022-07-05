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
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    & > * {
      display: flex;
      flex-direction: column;
      gap: 0.7em;
    }
    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.heading1.color};
    }

    select {
      background-image: url(${imageResources.CloseIcon});
      background-repeat: no-repeat;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
      background-position-x: 90%;
      background-position-y: 50%;
      :focus {
        border: 2px solid ${({ theme }) => theme.button.backgroundColor};
      }
    }
    input,
    select {
      padding: 1.75em 1em;
      font-size: 0.875rem;
      width: 100%;
      font-weight: 500;
      color: ${({ theme }) => theme.heading1.color};
      outline: none;
      border: 2px solid ${({ theme }) => theme.placeholder.color};
      border-radius: 12px;
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
    select .default {
      color: ${({ theme }) => theme.placeholder.color};
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
  @media (max-width: 750px) {
    right: revert;
    position: revert;
    width: 100%;
  }
`;

export default FormStyled;
