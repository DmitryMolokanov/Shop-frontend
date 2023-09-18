import React from "react";
import "../../../styles/MainMenu.css";
import SearchForm from "../MainPage/MainMenu/SearchForm";
import HomeIcon from "../MainPage/MainMenu/HomeIcon";
import CartIcon from "../MainPage/MainMenu/CartIcon";
import LoginIcon from "../MainPage/MainMenu/LoginIcon";

function MainMenu(props) {
  return (
    <div className="main-menu-block">
      <div className="main-menu-container">
        <HomeIcon />
        <SearchForm products={props.products} />
        <CartIcon>Cart</CartIcon>
        <LoginIcon>Sign In</LoginIcon>
      </div>
    </div>
  );
}

export default MainMenu;
