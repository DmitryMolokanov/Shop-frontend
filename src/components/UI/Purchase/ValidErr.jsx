import React from "react";

function ValidErr(props) {
  return (
    <div className="error">{!props.isValidForm ? props.children : null}</div>
  );
}

export default ValidErr;
