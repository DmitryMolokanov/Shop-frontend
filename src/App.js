import React, { useState } from "react";
import "./styles/App.css";
import MainMenu from "./components/MainMenu";
import Carousel from "./components/Carousel";
import ProductsField from "./components/ProductsField";
import products from "./products/products";
import "./styles/ProductsField.css";

function App() {
  const [editedArray, setEditedArray] = useState(products);

  function getSelectArr(arr) {
    setEditedArray(arr);
  }

  return (
    <div className="App">
      <MainMenu products={products} getSelectArr={getSelectArr} />
      <Carousel products={products} />
      <ProductsField products={editedArray} />
    </div>
  );
}

export default App;
