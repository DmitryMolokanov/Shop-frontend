import React from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import SendButton from "../components/UI/CartPage/SendButton";
import LoginInput from "../components/UI/LoginPage/LoginInput";
import NewCustomer from "../components/UI/LoginPage/NewCustomer";
import "../styles/Login.css";

function LoginPage() {
  return (
    <div className="login-page-block">
      <MainMenu />
      <h1 className="login-tytle">Sign in</h1>
      <form className="login">
        <div className="login-form-block">
          <LoginInput>Enter e-mail</LoginInput>
          <LoginInput>Enter password</LoginInput>
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
