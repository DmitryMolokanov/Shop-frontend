import React from "react";

function SendButton(props) {
  return (
    <div>
      {props.user !== null ? (
        <a href="/purchase">
          <button className="send-button" onClick={props.func}>
            {props.children}
          </button>
        </a>
      ) : (
        <div className="error">
          <span>Enter or register for continue </span>
        </div>
      )}
    </div>
  );
}

export default SendButton;
