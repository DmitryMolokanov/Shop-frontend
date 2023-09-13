import React from "react";

function LoginInput(props) {
  return (
    <label>
      {props.children}: <br />
      <input type="text" className="input-login" />
    </label>
  );
}

export default LoginInput;
