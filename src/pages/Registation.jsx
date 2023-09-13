import React from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import LoginInput from "../components/UI/LoginPage/LoginInput";
import SendButton from "../components/UI/CartPage/SendButton";

function Registation() {
  return (
    <div className="login-page-block">
      <MainMenu />
      <h1 className="login-tytle">Sign in</h1>
      <form className="login">
        <div className="login-form-block">
          <LoginInput>Enter your name:</LoginInput>
          <LoginInput>Enter your e-mail:</LoginInput>
          <LoginInput>Enter password:</LoginInput>
          <LoginInput>Confirm password:</LoginInput>
          <SendButton style={{ width: "fit-content", marginLeft: 0 }}>
            Sign in
          </SendButton>
        </div>
      </form>
    </div>
  );
}

export default Registation;
