import { React, useContext } from "react";
import SelectQty from "./SelectQty";
import { CartContext } from "../../../constext/context";

function CartProductBlock() {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  function removeProduct(item) {
    let currentProducts = cartProducts.filter((p) => p.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(currentProducts));
    setCartProducts(currentProducts);
  }

  return (
    <div>
      {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
        cartProducts.map((item, index) => {
          const id = index + 1;
          return (
            <div key={item.id} className="cart-order-block">
              <div className="cart-id">{id}.</div>
              <div className="catr-img">
                <img src={item.img} alt={item.name} className="img-product" />
              </div>
              <div className="cart-product-title">{item.name}</div>
              <div className="cart-product-cost">{item.cost}</div>
              <div className="cart-product-qty">
                <SelectQty item={item} />
              </div>
              <button
                className="close"
                onClick={() => {
                  removeProduct(item);
                }}
              >
                X
              </button>
            </div>
          );
        })
      ) : (
        <h1 className="empty-message">Yuor shopping card is empty</h1>
      )}
    </div>
  );
}

export default CartProductBlock;
