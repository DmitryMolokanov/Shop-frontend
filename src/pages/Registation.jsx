import { React, useRef, useState } from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import LoginInput from "../components/UI/LoginPage/LoginInput";
import SendButton from "../components/UI/CartPage/SendButton";
import ValidErr from "../components/UI/Registration/ValidErr";
import cleanForm from "../utils/form-helper/cleanForm";
import validationForm from "../utils/form-helper/validationForm";

function Registation() {
  // const [form, setForm] = useState({
  //   name: "",
  //   "e-mail": "",
  //   password: "",
  //   confPassword: "",
  // });

  const [validMessage, setValidMessage] = useState(false);

  let nameValue = useRef(null);
  let emailValue = useRef(null);
  let passwordValue = useRef(null);
  let confPasswordValue = useRef(null);

  function getFormValue(e) {
    e.preventDefault();
    const form = {
      name: nameValue.current.value,
      "e-mail": emailValue.current.value,
      password: passwordValue.current.value,
      confPassword: confPasswordValue.current.value,
    };
    if (validationForm(form) === false) {
      setValidMessage(true);
      return;
    }

    fetch("/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    cleanForm([nameValue, emailValue, passwordValue, confPasswordValue]);
  }

  return (
    <div className="login-page-block">
      <MainMenu />
      <h1 className="login-tytle">Sign in</h1>
      <ValidErr validMessage={validMessage}>
        Please fill out all fields
      </ValidErr>

      <form className="login" onSubmit={(e) => getFormValue(e)}>
        <div className="login-form-block">
          <LoginInput value={nameValue}>Enter your name</LoginInput>
          <LoginInput value={emailValue}>Enter your e-mail</LoginInput>
          <LoginInput value={passwordValue}>Enter password</LoginInput>
          <LoginInput value={confPasswordValue}>Confirm password</LoginInput>
          <SendButton style={{ width: "fit-content", marginLeft: 0 }}>
            Sign in
          </SendButton>
        </div>
      </form>
    </div>
  );
}

export default Registation;
