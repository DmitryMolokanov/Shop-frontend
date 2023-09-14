import React from "react";

function LoginInput(props) {
  return (
    <label>
      {props.children}: <br />
      <input type="text" className="input-login" ref={props.value} />
    </label>
  );
}

export default LoginInput;
