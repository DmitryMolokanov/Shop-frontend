import React from "react";

function FormButton(props) {
  function getSearchResult(e) {
    e.preventDefault();
    const result = props.products.filter((item) => {
      const name = item.name.toLowerCase();
      return name.includes(props.inputValue.toLowerCase());
    });
    return result;
  }

  return (
    <button
      className="form-button"
      onClick={(e) => {
        props.getSelectArr(getSearchResult(e));
      }}
    >
      {props.titel}
    </button>
  );
}

export default FormButton;
