import React from "react";

function SendButton(props) {
  return (
    <button className="send-button" style={props.style}>
      {props.title}
    </button>
  );
}

export default SendButton;
