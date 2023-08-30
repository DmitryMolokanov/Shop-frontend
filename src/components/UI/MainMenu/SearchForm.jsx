import React from "react";
import FormButton from "./FormButton";

function SearchForm() {
  return (
    <form className="main-menu-search-form">
      <input
        type="text"
        placeholder="enter product name"
        className="searchInput"
      />
      <FormButton titel={"Search"} />
    </form>
  );
}

export default SearchForm;
