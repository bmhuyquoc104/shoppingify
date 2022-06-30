import React from "react";
import { imageResources } from "../../assets/imageResources";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineInsertChart } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdReplay } from "react-icons/md";
import HeaderStyled from "./Header.styled";

function Header() {
  let itemCount = 3;
  const controllerStyled = {
    color: "var(--clr_header_button_light)",
    fontSize: "1.75rem",
  };
  const cartStyled = {
    color: "#ffffff",
    fontSize: "2.5rem",
    backgroundColor: "var(--clr_button_bg_light)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    padding: "0.23em",
    justifyContent: "center",
  };
  return (
    <HeaderStyled>
      <img src={imageResources.Logo} alt="Logo" />
      <div className="controller">
        <AiOutlineUnorderedList style={controllerStyled} />
        <MdReplay style={controllerStyled} />
        <MdOutlineInsertChart style={controllerStyled} />
      </div>
      <div className="cart">
        <MdOutlineShoppingCart style={cartStyled} />
        {itemCount != 0 && <p className="itemCount">{itemCount}</p>}
      </div>
    </HeaderStyled>
  );
}

export default Header;
