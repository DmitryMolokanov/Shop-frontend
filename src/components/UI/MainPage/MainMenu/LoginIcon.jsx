import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginMenu from "./LoginMenu";

function LoginIcon(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      setIsAuth(true);
    } else setIsAuth(false);
  }, [user]);

  function exitFromLogin() {
    localStorage.removeItem("user");
    setIsAuth(false);
    navigate("/login");
  }

  return isAuth ? (
    <LoginMenu user={user} exitFromLogin={exitFromLogin} />
  ) : (
    <a href="/login" className="login-button">
      <img src="/icon/user-profile.png" alt="login" className="login-img" />
      {props.children}
    </a>
  );
}

export default LoginIcon;
