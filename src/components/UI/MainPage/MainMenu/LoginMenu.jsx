import { React, useState } from "react";

function LoginMenu(props) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  function showMenu() {
    setShowUserMenu((current) => !current);
  }
  return (
    <div className="login-button">
      <button className="login-name" onClick={showMenu}>
        {props.user.user}
      </button>
      <div
        className="user-menu"
        style={showUserMenu ? { display: "block" } : { display: "none" }}
      >
        <a href="/my_purchase">
          <button className="user-menu-logout"> My purchase</button>
        </a>
        <button className="user-menu-logout" onClick={props.exitFromLogin}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default LoginMenu;
