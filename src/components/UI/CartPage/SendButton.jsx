import React from "react";

function SendButton(props) {
  return (
    <button className="send-button" onClick={props.func}>
      {props.children}
    </button>
  );
}

export default SendButton;
