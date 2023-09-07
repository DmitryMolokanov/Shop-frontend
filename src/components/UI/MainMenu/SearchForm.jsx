import React, { useState } from "react";
import FormButton from "./FormButton";

function SearchForm(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="main-menu-search-form" action="/search">
      <input
        type="text"
        placeholder="enter product name"
        className="searchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FormButton
        titel={"Search"}
        inputValue={inputValue}
        products={props.products}
      />
    </form>
  );
}

export default SearchForm;
