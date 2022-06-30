import styled from "styled-components";

const HeaderStyled = styled.nav`
  padding: 1em 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr_header_bg_light);
  height: 100vh;
  position: fixed;
  z-index: 1;

  .controller {
    display: flex;
    gap: 4em;
    flex-direction: column;
    align-items: center;
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
`;

export default HeaderStyled;
