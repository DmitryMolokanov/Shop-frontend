import React, { useEffect, useState } from "react";

function CartIcon(props) {
  let localStorageArr = JSON.parse(localStorage.getItem("cart"));

  const [qtyProducts, setQtyProducts] = useState(0);

  useEffect(() => {
    if (Array.isArray(localStorageArr)) setQtyProducts(localStorageArr.length);
  }, [localStorageArr]);

  return (
    <div className="cart-icon">
      <a href="/cart" className="cart-button">
        <img src="/icon/cart.png" alt="cart" />
        {props.title}
      </a>{" "}
      <div className="pointer-quantity-products">{qtyProducts}</div>
    </div>
  );
}

export default CartIcon;
