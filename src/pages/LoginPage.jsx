import React from "react";
import MainMenu from "../components/MainMenu";
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
          <LoginInput title={"Enter e-mail"} />
          <LoginInput title={"Enter password"} />
          <SendButton
            title={"Sign in"}
            style={{ width: "fit-content", marginLeft: 0 }}
          />
          <NewCustomer />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
