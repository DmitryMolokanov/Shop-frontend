import { useEffect, useState } from "react";
import MainMenu from "../components/MainMenu";
import "../styles/CartPage.css";
import CartProductBlock from "../components/UI/CartPage/CartProductBlock";
import SendResult from "../components/UI/CartPage/SendResult";
import Copyright from "../components/UI/Сopyright";

function CartPage() {
  const parseStorage = JSON.parse(localStorage.getItem("cart"));

  const [products, setProducts] = useState(parseStorage);

  function getCurrentProducts(curProd) {
    setProducts(curProd);
  }

  return (
    <div className="cart-page">
      <MainMenu /> <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-product-block">
        <CartProductBlock
          products={products}
          getCurrentProducts={getCurrentProducts}
        />
        <SendResult products={products} />
      </div>
    </div>
  );
}

export default CartPage;
