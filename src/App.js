import React from "react";
import "./styles/App.css";
import MainMenu from "./components/MainMenu";
import Carousel from "./components/Carousel";
import ProductsField from "./components/ProductsField";
import products from "./products/products";
import "./styles/ProductsField.css";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Carousel products={products} />
      <ProductsField products={products} />
    </div>
  );
}

export default App;
