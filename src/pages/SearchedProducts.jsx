import React from "react";
import MainMenu from "../components/MainMenu";
import ProductsField from "../components/UI/MainPage/ProductsField/ProductsField";

function SearchedProducts() {
  const searchArr = JSON.parse(localStorage.getItem("search"));
  return (
    <div style={{ width: "100%" }}>
      <MainMenu />
      {searchArr.length > 0 ? (
        <ProductsField products={searchArr} />
      ) : (
        <h1 className="empty-message">
          Products matching your request were not found
        </h1>
      )}
    </div>
  );
}

export default SearchedProducts;
