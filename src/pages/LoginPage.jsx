import React, { useRef, useState } from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import SendButton from "../components/UI/CartPage/SendButton";
import LoginInput from "../components/UI/LoginPage/LoginInput";
import NewCustomer from "../components/UI/LoginPage/NewCustomer";
import ValidErr from "../components/UI/Registration/ValidErr";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LoginPage() {
  const [isValid, setIsValid] = useState(false);
  const emailValue = useRef();
  const passwordValue = useRef();
  const navigate = useNavigate();

  async function sendForm(e) {
    e.preventDefault();
    const form = {
      email: emailValue.current.value,
      password: passwordValue.current.value,
    };
    const response = await fetch("user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = await response.json();
    if (result.success === false) {
      setIsValid(true);
    } else {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
  }

  return (
    <div className="login-page-block">
      <MainMenu />
      <h1 className="login-tytle">Sign in</h1>
      <ValidErr isValid={isValid}>Login or password is incorrect</ValidErr>
      <form className="login" onSubmit={(e) => sendForm(e)}>
        <div className="login-form-block">
          <LoginInput value={emailValue}>Enter e-mail</LoginInput>
          <LoginInput value={passwordValue}>Enter password</LoginInput>
          <SendButton style={{ width: "fit-content", marginLeft: 0 }}>
            Sign in
          </SendButton>
          <NewCustomer />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
