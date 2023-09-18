import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginIcon(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isAuth, setIsAuth] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      setIsAuth(true);
    } else setIsAuth(false);
  }, [user]);

  function showMenu() {
    setShowUserMenu((current) => !current);
  }
  function exitFromLogin() {
    localStorage.removeItem("user");
    setIsAuth(false);
    navigate("/login");
  }

  return isAuth ? (
    <div className="login-button">
      <button className="login-name" onClick={showMenu}>
        {user.user}
      </button>
      <div
        className="user-menu"
        style={showUserMenu ? { display: "block" } : { display: "none" }}
      >
        <button className="user-menu-logout" onClick={exitFromLogin}>
          Logout
        </button>
      </div>
    </div>
  ) : (
    <a href="/login" className="login-button">
      <img src="/icon/user-profile.png" alt="login" className="login-img" />
      {props.children}
    </a>
  );
}

export default LoginIcon;
