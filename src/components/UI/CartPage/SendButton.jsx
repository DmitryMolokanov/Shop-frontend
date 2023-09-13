import React from "react";

function SendButton(props) {
  return (
    <button className="send-button" style={props.style}>
      {props.children}
    </button>
  );
}

export default SendButton;
