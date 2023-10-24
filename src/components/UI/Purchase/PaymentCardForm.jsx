import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidErr from "./ValidErr";
import validCard from "../../../utils/form-helper/validCard";

function PaymentCardForm(props) {
  const [isValidForm, setIsValidForm] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [paidEffect, setPaidEffect] = useState(false);

  const paymentData = {
    adress: props.contactsData.adress,
    phone: props.contactsData.phone,
    email: props.contactsData.email,
    cardNumber: cardNumber,
    monthYear: monthYear,
    cvc: cvc,
    date: new Date(),
    products: props.products.cartProducts,
    total_cost: props.getTotalCost(),
  };
  const userPurchases = {
    email: props.contactsData.email,
    date: new Date(),
    products: props.products.cartProducts,
  };

  const navigate = useNavigate();

  function getCardNumber(event) {
    const replace = event.target.value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(replace);
  }
  function getmonthYear(event) {
    let replace = event.target.value;
    if (replace.length === 2) {
      replace = replace + "/";
    }
    setMonthYear(replace);
  }

  async function purchase(e) {
    e.preventDefault();
    if (!validCard(paymentData)) {
      setIsValidForm(false);
      return;
    }
    setIsValidForm(true);
    const addPurchase = await fetch("user/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPurchases),
    });
    const resultAddPurchase = await addPurchase.json();

    const addOrderToDB = await fetch("order//add_order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    });
    const resultaddOrderToDB = await addOrderToDB.json();

    setPaidEffect(true);
    localStorage.setItem("cart", JSON.stringify([]));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  function setPaymentAvailable(e) {
    e.preventDefault();
    props.paymentAvailable.setPaymentAvailable(false);
  }

  return (
    <div className="purchase-card">
      {!props.paymentAvailable.paymentAvailable ? (
        <div className="purchase-payment-available"></div>
      ) : null}
      <ValidErr isValidForm={isValidForm}>
        Check that the card is filled out correctly
      </ValidErr>
      <form>
        <div className="purchase-card-data">
          <input
            value={cardNumber}
            type="text"
            maxLength={19}
            placeholder="Enter your card number"
            className="purchase-card-input"
            onChange={(e) => {
              getCardNumber(e);
            }}
          />
        </div>
        <div className="purchase-card-mm-cvc">
          <input
            value={monthYear}
            id="purchase-card-mm"
            type="text"
            maxLength={5}
            className="purchase-card-input"
            placeholder="MM/YY"
            onChange={(e) => {
              getmonthYear(e);
            }}
          />
          <input
            id="purchase-card-cvc"
            type="text"
            value={cvc}
            maxLength={3}
            className="purchase-card-input"
            placeholder="CVC"
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <button
          className="purchase-btn"
          onClick={(e) => {
            purchase(e);
          }}
          style={
            paidEffect
              ? { backgroundColor: "rgb(72, 128, 177)", width: "100%" }
              : null
          }
        >
          {paidEffect
            ? "Thank you for purchase"
            : `Pay ${props.getTotalCost()}$`}
        </button>
        <button
          className="purchase-btn"
          id="purchase-card-btn-correct"
          onClick={setPaymentAvailable}
          style={paidEffect ? { display: "none" } : { display: "inline" }}
        >
          Correct contacts
        </button>
      </form>
    </div>
  );
}

export default PaymentCardForm;
