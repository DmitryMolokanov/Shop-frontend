import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./constext/context";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import products from "./products/products";
import SearchedProducts from "./pages/SearchedProducts";
import LoginPage from "./pages/LoginPage";
import Registation from "./pages/Registation";

function App() {
  const storageProducts = JSON.parse(localStorage.getItem("cart"));
  const [cartProducts, setCartProducts] = useState(storageProducts);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage products={products} />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route
              path="/cart"
              element={<CartPage cartProducts={cartProducts} />}
            />
            <Route path="/search" element={<SearchedProducts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<Registation />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
