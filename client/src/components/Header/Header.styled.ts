import styled from "styled-components";

const HeaderStyled = styled.nav`
  padding: 1em 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.header.backgroundColor};
  height: 100vh;
  position: fixed;
  z-index: 1;

  .controller,.header-top {
    display: flex;
    gap: 4em;
    flex-direction: column;
    align-items: center;
  }
  .header-top{
    gap:1em;
  }
  .cart{
    position: relative;
  }
  .itemCount {
    top:-5px;
    right:-5px;
    padding: 0.4em 0.8em;
    color: #ffffff;
    font-size:0.6rem;
    border-radius:5px;
    background-color: var(--clr_item_bg_light);
    position:absolute;
  }
  .controller > *{
    font-size:1.75rem;
    color:${({theme}) => theme.header.button.backgroundColor}
  }
`;

export default HeaderStyled;
