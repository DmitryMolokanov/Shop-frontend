import React from "react";
import "../styles/MainMenu.css";
import SearchForm from "./UI/MainMenu/SearchForm";
import HomeIcon from "./UI/MainMenu/HomeIcon";
import CartIcon from "./UI/MainMenu/CartIcon";
import LoginIcon from "./UI/MainMenu/LoginIcon";

function MainMenu() {
  return (
    <div className="main-menu-block">
      <div className="main-menu-container">
        <HomeIcon />
        <SearchForm />
        <CartIcon title={"Cart"} />
        <LoginIcon title={"Sign In"} />
      </div>
    </div>
  );
}

export default MainMenu;
