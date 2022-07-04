import styled from "styled-components";

const HeaderStyled = styled.nav`
  padding: 1.5em 0em;
  width:5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  height: 100vh;
  position: fixed;
  z-index: 1;

  .controller,
  .header-top {
    display: flex;
    gap: 4em;
    flex-direction: column;
    align-items: center;
  }
  .header-top {
    gap: 1em;
  }
  .cart {
    position: relative;
  }
  .itemCount {
    top: -5px;
    right: -5px;
    padding: 0.4em 0.8em;
    color: #ffffff;
    font-size: 0.6rem;
    border-radius: 5px;
    background-color: var(--clr_item_bg_light);
    position: absolute;
  }

  .controller-container > :first-child {
    position: relative;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.header.button.backgroundColor};
  }
  .controller-container:hover {
    .tagName,
    .triangle {
      display: flex;
    }
  }

  .controller,.controller-icon,.controller-container{
    width: 100%;
  }
  .controller-icon a {
    width:100%;
    display: flex;
    padding: 6px 0;
    align-items: center;
  }
  .controller-icon a >:nth-child(2){
    margin-left:auto;
    margin-right:auto;
  }
  .controller-icon a.active {
    .decoration{
      position: absolute;
      padding:3px;
      top:0;
      left:0;
      bottom:0;
      background-color:#f9a109;
      border-radius:5px;
    }
  }
  .controller-icon a {
    border-left: 5px solid transparent;
    color: ${({ theme }) => theme.header.button.backgroundColor};
  }

  .controller-container {
    display: flex;
    align-items: center;
    margin-left:auto;
    .tagName,
    .triangle {
      display: none;
    }
  }
  .tagName {
    position: absolute;
    left: 6.5em;
    background-color: ${({ theme }) => theme.header.button.backgroundColor};
    color: ${({ theme }) => theme.header.backgroundColor};
    padding: 0.25em 0.6em;
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 5px;
  }
  .triangle {
    z-index: 2;
    position: absolute;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top: 0;
    border-bottom: 6px solid
      ${({ theme }) => theme.header.button.backgroundColor};
    left: 4.5em;
    transform: rotate(270deg);
  }
  @media (max-width:480px){
    width:4.2em;
  }
`;

export default HeaderStyled;
