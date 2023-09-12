import React from "react";

function LoginIcon(props) {
  return (
    <a href="/login" className="login-button">
      <img src="/icon/user-profile.png" alt="login" className="login-img" />
      {props.title}
    </a>
  );
}

export default LoginIcon;
