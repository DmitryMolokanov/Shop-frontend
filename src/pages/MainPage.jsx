import React from "react";
import "../styles/App.css";
import MainMenu from "../components/MainMenu";
import Carousel from "../components/Carousel";
import ProductsField from "../components/ProductsField";
import "../styles/ProductsField.css";

function MainPage(props) {
  return (
    <div className="App">
      <MainMenu products={props.products} />
      <Carousel products={props.products} />
      <ProductsField products={props.products} />
    </div>
  );
}

export default MainPage;
