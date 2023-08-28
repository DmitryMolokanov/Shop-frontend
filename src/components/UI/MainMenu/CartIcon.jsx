import React from "react";

function CartIcon(props) {
  return (
    <a href="/cart" className="cart-button">
      <img src="/icon/cart.png" alt="cart" />
      {props.title}
    </a>
  );
}

export default CartIcon;
