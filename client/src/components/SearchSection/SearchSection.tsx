import { useGetItemByName } from "../../hooks/useItems";
import { MdSearch } from "react-icons/md";
import { QueryByName } from "../../models/Item";
import SearchSectionStyled from "./SearchSection.styled";
import React from "react";



function SearchSection() {
  const { mutate } = useGetItemByName();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query: QueryByName = { name: `${e.target.value}` };
    mutate(query);
  };
  return (
    <SearchSectionStyled>
      <h1>
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go
      </h1>
      <div className="search-button">
        <MdSearch />
        <input onChange = {handleSearch} type="text" placeholder="search item" />
      </div>
    </SearchSectionStyled>
  );
}

export default SearchSection;
