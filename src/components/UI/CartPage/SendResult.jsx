import React, { useEffect, useState } from "react";
import "../../../styles/CartPage.css";

function SendResult(props) {
  let qty = props.products.reduce((a, b) => a + b.qty, 0);
  let sum = props.products.reduce((a, b) => a + parseInt(b.cost), 0);

  const [amount, setAmount] = useState({ qty: qty, amount: sum });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (props.products.length > 0) {
      setIsSend(true);
    } else setIsSend(false);
    setAmount({ qty: qty, amount: sum });
  }, [props]);

  return (
    <div
      className="send-result-block"
      style={isSend ? { display: "block" } : { display: "none" }}
    >
      <h2 className="send-title">Total qty products: {amount.qty} </h2>
      <h2 className="send-title">Total amount: {amount.amount}$ </h2>
      <button className="send-button">Proceed to checkout</button>
    </div>
  );
}

export default SendResult;
