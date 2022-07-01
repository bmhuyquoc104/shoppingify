import React from "react";
import { imageResources } from "../../assets/imageResources";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineInsertChart } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdReplay } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { MdOutlineWbSunny } from "react-icons/md";
import HeaderStyled from "./Header.styled";

type HeaderProps = {
  themeToggler: any;
  theme: any;
};

function Header({ themeToggler, theme }: HeaderProps) {
  let itemCount = 3;
  const moonStyled = {
    color: "var(--clr_header_button_light)",
    fontSize: "1.75rem",
  };
  const sunStyled = {
    color: "var(--clr_header_button_dark)",
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
      <div className="header-top">
        <img src={imageResources.Logo} alt="Logo" />
        {theme === "lightTheme" ? (
          <HiOutlineMoon onClick={themeToggler} style={moonStyled} />
        ) : (
          <MdOutlineWbSunny onClick={themeToggler} style={sunStyled} />
        )}
      </div>
      <div className="controller">
        <AiOutlineUnorderedList />
        <MdReplay />
        <MdOutlineInsertChart />
      </div>
      <div className="cart">
        <MdOutlineShoppingCart style={cartStyled} />
        {itemCount != 0 && <p className="itemCount">{itemCount}</p>}
      </div>
    </HeaderStyled>
  );
}

export default Header;
