import React, { useEffect, useState } from "react";

function CartIcon(props) {
  const [qtyIcon, setQtyIcon] = useState(0);
  const [isQty, setIsQty] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("storage", () => {
  //     setCart(JSON.parse(localStorage.getItem("cart")) || []);
  //     console.log(cart);
  //   });
  // }, []);

  return (
    <div>
      <a href="/cart" className="cart-button">
        <img src="/icon/cart.png" alt="cart" />
        {props.title}
      </a>
    </div>
  );
}

export default CartIcon;
