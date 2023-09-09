import React, { useEffect, useState } from "react";
import SendButton from "./SendButton";
import "../../../styles/CartPage.css";

function SendResult(props) {
  const [amount, setAmount] = useState({ qty: 0, amount: 0 });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.products) && props.products.length > 0) {
      setIsSend(true);
      let qty = props.products.reduce((a, b) => a + b.qty, 0);
      let sum = props.products.reduce((a, b) => a + parseInt(b.cost), 0);
      setAmount({ qty: qty, amount: sum });
    } else setIsSend(false);
  }, [props]);

  return (
    <div
      className="send-result-block"
      style={isSend ? { display: "block" } : { display: "none" }}
    >
      <h2 className="send-title">Total qty products: {amount.qty} </h2>
      <h2 className="send-title">Total amount: {amount.amount}$ </h2>
      <SendButton title={"Proceed to checkout"} />
    </div>
  );
}

export default SendResult;
