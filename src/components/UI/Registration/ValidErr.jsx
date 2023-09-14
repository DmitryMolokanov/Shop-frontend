import React from "react";

function ValidErr(props) {
  return (
    <div className="login-validErr">
      <span
        style={props.validMessage ? { display: "block" } : { display: "none" }}
      >
        {props.children}
      </span>
    </div>
  );
}

export default ValidErr;
