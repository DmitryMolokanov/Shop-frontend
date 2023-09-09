import { useState } from "react";
import MainMenu from "../components/MainMenu";
import "../styles/CartPage.css";
import CartProductBlock from "../components/UI/CartPage/CartProductBlock";
import SendResult from "../components/UI/CartPage/SendResult";

function CartPage() {
  const parseStorage = JSON.parse(localStorage.getItem("cart"));

  const [products, setProducts] = useState(parseStorage);
  const [changedQtyProducts, setChangedQtyProducts] = useState();

  function getCurrentProducts(curProd) {
    setProducts(curProd);
  }

  function getChangedQty(changedQty) {
    setChangedQtyProducts(changedQty);
  }

  return (
    <div className="cart-page">
      <MainMenu /> <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-product-block">
        <CartProductBlock
          products={products}
          getCurrentProducts={getCurrentProducts}
          getChangedQty={getChangedQty}
        />
        <SendResult
          products={products}
          changedQtyProducts={changedQtyProducts}
        />
      </div>
    </div>
  );
}

export default CartPage;
