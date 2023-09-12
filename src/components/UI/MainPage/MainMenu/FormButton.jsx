import React from "react";
import products from "../../../../products/products";

function FormButton(props) {
  function getSearchResult() {
    const result = products.filter((item) => {
      const name = item.name.toLowerCase();
      return name.includes(props.inputValue.toLowerCase());
    });

    return localStorage.setItem("search", JSON.stringify(result));
  }

  return (
    <button className="form-button" onClick={getSearchResult}>
      {props.titel}
    </button>
  );
}

export default FormButton;
