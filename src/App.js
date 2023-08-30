import React from "react";
import "./styles/App.css";
import MainMenu from "./components/MainMenu";
import Carousel from "./components/Carousel";
import products from "./products/products";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Carousel products={products} />
    </div>
  );
}

export default App;
