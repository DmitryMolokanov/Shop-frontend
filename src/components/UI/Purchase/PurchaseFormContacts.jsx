import React, { useState } from "react";
import ValidErr from "./ValidErr";
import validationForm from "../../../utils/form-helper/validationForm";
import validPhone from "../../../utils/form-helper/validPhone";

function PurchaseFormContacts(props) {
  const [adress, setAdress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState(props.user.email);
  const [isValidForm, setIsValidForm] = useState(true);
  const [isValidePhone, setIsValidePhone] = useState(true);

  const contactsData = {
    adress: adress,
    phone: phoneNum,
    email: email,
  };

  function sendData(e) {
    e.preventDefault();
    if (!validationForm(contactsData)) {
      setIsValidForm(false);
      return;
    } else setIsValidForm(true);
    if (!validPhone(contactsData.phone)) {
      setIsValidePhone(false);
      return;
    } else setIsValidePhone(true);
    props.getContactsData(contactsData);
  }
  return (
    <form className="form-purchase">
      {props.paymentAvailable ? (
        <div className="purchase-payment-available"></div>
      ) : (
        ""
      )}
      <ValidErr isValidForm={isValidForm}>
        You need to fill in all fields
      </ValidErr>

      <input
        className="purchase-input"
        placeholder="Enter your adress"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
      />
      <input
        className="purchase-input"
        placeholder="Enter your phone number in the format 8XXXXXXXXXX"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <div className="error">
        {!isValidePhone ? "Phone number is incorrect" : ""}
      </div>
      <input
        className="purchase-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="purchase-btn" onClick={(e) => sendData(e)}>
        I'm ready to pay
      </button>
    </form>
  );
}

export default PurchaseFormContacts;
