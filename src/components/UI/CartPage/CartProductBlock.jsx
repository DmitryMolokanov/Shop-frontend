import React from "react";
import SelectQty from "./SelectQty";

function CartProductBlock(props) {
  function getChangedQty(changedQty) {
    props.getChangedQty(changedQty);
  }

  return (
    <div>
      {Array.isArray(props.products) && props.products.length > 0 ? (
        props.products.map((item, index) => {
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
                <SelectQty
                  item={item}
                  products={props.products}
                  getCHangedQty={getChangedQty}
                  value={item.qty}
                />
              </div>
              <button
                className="close"
                onClick={() => {
                  let currentProducts = props.products.filter(
                    (p) => p.id !== item.id
                  );
                  props.getCurrentProducts(currentProducts);
                  localStorage.setItem("cart", JSON.stringify(currentProducts));
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
