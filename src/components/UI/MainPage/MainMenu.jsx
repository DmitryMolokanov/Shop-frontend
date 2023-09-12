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
        <CartIcon title={"Cart"} />
        <LoginIcon title={"Sign In"} />
      </div>
    </div>
  );
}

export default MainMenu;
