import React, { useContext, useState } from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import PurchaseFormContacts from "../components/UI/Purchase/PurchaseFormContacts";
import PaymentCardForm from "../components/UI/Purchase/PaymentCardForm";
import PurchaseOrder from "../components/UI/Purchase/PurchaseOrder";
import "../styles/Purchase.css";
import { CartContext } from "../constext/context";

function Purchase() {
  const products = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [paymentAvailable, setPaymentAvailable] = useState(false);
  const [contactData, setContactData] = useState("");

  function getTotalCost() {
    const allTotalAmount = products.cartProducts.map((prod) => {
      return prod.total_amount;
    });
    const sum = allTotalAmount.reduce((cur, acc) => {
      return (cur += acc);
    });
    return sum;
  }
  function getContactsData(data) {
    if (data) {
      setPaymentAvailable(true);
      setContactData(data);
    }
  }

  return (
    <div className="purchase">
      <MainMenu />
      <h1 className="purchase-title">Pay for products</h1>
      <div className="purchase-content-container">
        <PurchaseFormContacts
          user={user}
          getContactsData={getContactsData}
          paymentAvailable={paymentAvailable}
        />
        <PaymentCardForm
          getTotalCost={getTotalCost}
          paymentAvailable={{ paymentAvailable, setPaymentAvailable }}
          contactsData={contactData}
          products={products}
        />
        <PurchaseOrder products={products} getTotalCost={getTotalCost} />
      </div>
    </div>
  );
}

export default Purchase;
