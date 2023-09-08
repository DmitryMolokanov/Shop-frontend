import React from "react";

function LoginInput(props) {
  return (
    <label>
      {props.title}: <br />
      <input
        type="text"
        placeholder="Enter your e-mail"
        className="input-login"
      />
    </label>
  );
}

export default LoginInput;
