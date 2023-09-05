import { useEffect, useState } from "react";
import MainMenu from "../components/MainMenu";
import "../styles/CartPage.css";
import SelectQty from "../components/UI/ProductPage/SelectQty";

function CartPage() {
  const parseStorage = JSON.parse(localStorage.getItem("cart"));

  const [products, setProducts] = useState(parseStorage);

  useEffect(() => {}, []);

  return (
    <div className="cart-page">
      <MainMenu />
      <h1 style={{ fontFamily: "Kanit", color: "rgb(107, 107, 107)" }}>
        Shopping Cart
      </h1>
      {Array.isArray(products) ? (
        products.map((item, index) => {
          return (
            <div key={index} className="cart-order-block">
              <div className="catr-img">
                <img src={item.img} alt={item.name} className="img-product" />
              </div>
              <div className="cart-product-title">{item.name}</div>
              <div className="cart-product-cost">{item.cost}</div>
              <div className="cart-product-qty">
                <SelectQty />
              </div>
              <button className="close">X</button>
            </div>
          );
        })
      ) : (
        <h1 className="empty-message">Yuor shopping card is empty</h1>
      )}
    </div>
  );
}

export default CartPage;
