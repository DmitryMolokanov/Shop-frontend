import React, { useState } from "react";
import FormButton from "./FormButton";

function SearchForm(props) {
  const [inputValue, setInputValue] = useState("");

  function getSelectArr(arr) {
    props.getSelectArr(arr);
    setInputValue("");
  }

  return (
    <form className="main-menu-search-form">
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
        getSelectArr={getSelectArr}
      />
    </form>
  );
}

export default SearchForm;
