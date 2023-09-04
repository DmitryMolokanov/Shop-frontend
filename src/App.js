import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
