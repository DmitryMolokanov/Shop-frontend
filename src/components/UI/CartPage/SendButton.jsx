import React from "react";

function SendButton(props) {
  return (
    <a href="/purchase">
      <button className="send-button" onClick={props.func}>
        {props.children}
      </button>
    </a>
  );
}

export default SendButton;
