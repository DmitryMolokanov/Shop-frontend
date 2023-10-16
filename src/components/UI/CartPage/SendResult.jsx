import React, { useEffect, useState, useContext } from "react";
import SendButton from "./SendButton";
import { CartContext } from "../../../constext/context";
import "../../../styles/CartPage.css";

function SendResult(props) {
  console.log(props);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [amount, setAmount] = useState({ qty: 0, amount: 0 });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.cartProducts) && props.cartProducts.length > 0) {
      let qty = props.cartProducts.reduce((a, b) => a + b.qty, 0);
      let sum = props.cartProducts.reduce((a, b) => a + b.total_amount, 0);
      setAmount({ qty: qty, amount: sum });
      setIsSend(true);
    } else setIsSend(false);
  }, [props.cartProducts]);

  function formedOrder() {
    user.cart = cartProducts;
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <div
      className="send-result-block"
      style={isSend ? { display: "block" } : { display: "none" }}
    >
      <h2 className="send-title">Total qty products: {amount.qty} </h2>
      <h2 className="send-title">Total amount: {amount.amount}$ </h2>
      <SendButton func={formedOrder}>Proceed to checkout</SendButton>
    </div>
  );
}

export default SendResult;
