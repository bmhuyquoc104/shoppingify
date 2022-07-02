import styled from "styled-components";

const SearchSectionStyled = styled.section`
  padding: 2em 3em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  h1 {
    font-size: 1.625rem;
    color: ${({ theme }) => theme.heading1.color};
    font-weight: 700;
    letter-spacing: 0.25px;
    line-height: 1.3;
    width: 34ch;
    span {
      color: var(--clr_button_bg_light);
    }
  }
  .search-button {
    width: 18em;
    background-color: ${({ theme }) => theme.header.backgroundColor};
    display: flex;
    gap: 2em;
    border-radius: 12px;
    align-items: center;
    padding: 1em 1em;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);

    input {
      outline: none;
      border: none;
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text.color};
      background-color: transparent;
    }
    input::placeholder {
      color: ${({ theme }) => theme.placeholder.color};
    }
  }
  .search-button > :first-child {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text.color};
  }
  @media (max-width: 1137px) {
    padding: 2em 0;
    h1 {
      width: 25ch;
      font-size: 1.35rem;
      letter-spacing: 0.15px;
    }
    .search-button {
      width: 15em;
    }
  }
  @media (max-width: 927px) {
    gap:1em;
    flex-direction: column;
    .search-button,h1 {
      width: 80%;
    }
  }
`;

export default SearchSectionStyled;
