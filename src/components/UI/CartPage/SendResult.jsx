import React, { useEffect, useState } from "react";
import SendButton from "./SendButton";
import "../../../styles/CartPage.css";

function SendResult(props) {
  const [amount, setAmount] = useState({ qty: 0, amount: 0 });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    const products = props.changedQtyProducts
      ? props.changedQtyProducts
      : props.products;
    if (Array.isArray(products)) {
      let qty = products.reduce((a, b) => a + b.qty, 0);
      let sum = products.reduce((a, b) => a + b.total_amount, 0);
      setAmount({ qty: qty, amount: sum });
    }
  }, [props]);

  useEffect(() => {
    if (Array.isArray(props.products) && props.products.length > 0) {
      setIsSend(true);
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
