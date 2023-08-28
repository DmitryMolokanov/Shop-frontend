import React from "react";
import FormButton from "./FormButton";

function SearchForm() {
  return (
    <form>
      <input type="text" placeholder="enter product name" />
      <FormButton titel={"Search"} />
    </form>
  );
}

export default SearchForm;
