import React from "react";
import { MdSearch } from "react-icons/md";
import  SearchSectionStyled  from "./SearchSection.styled";
function SearchSection() {
  return (
    <SearchSectionStyled>
      <h1>
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go
      </h1>
      <div className="search-button">
        <MdSearch />
        <input type="text" placeholder="search item" />
      </div>
    </SearchSectionStyled>
  );
}

export default SearchSection;
