import styled from "styled-components";

const HeaderStyled = styled.nav`
  padding: 1em 1.5em;
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

  .controller-container > :first-child{
    position:relative;
    font-size:1.75rem;
    color:${({theme}) => theme.header.button.backgroundColor}
  }
  .controller-container:hover{
    .tagName,.triangle{
      display:flex;
    }
  }
  
  .controller-container{
    display: flex;
    align-items: center;
    .tagName,.triangle{
      display:none;
    }
  }
  .tagName{
    position: absolute;
    left:6.5em;
    background-color: ${({theme}) => theme.header.button.backgroundColor};
    color:${({theme}) => theme.header.backgroundColor};
    padding:0.25em 0.6em;
    font-weight:500;
    font-size:0.75rem;
    border-radius:5px;
  }
  .triangle{
    z-index:2;
    position: absolute;
    width:0;
    height:0;
    border:3px solid transparent;
    border-top:0;
    border-bottom:6px solid ${({theme}) => theme.header.button.backgroundColor};
    left:4.5em;
    transform:rotate(270deg);
  }
`;

export default HeaderStyled;
