import React from "react";

function ValidErr(props) {
  return (
    <div className="login-validErr">
      <span style={props.isValid ? { display: "block" } : { display: "none" }}>
        {props.children}
      </span>
    </div>
  );
}

export default ValidErr;
