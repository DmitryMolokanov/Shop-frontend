import React from "react";

function Pointer(props) {
  return (
    <div className="pointer-block">
      {props.products.map((qty, indexKey) => (
        <button
          key={indexKey}
          className="pointer-btn"
          onClick={() => {
            props.getIndex(indexKey);
          }}
          style={
            props.index === indexKey
              ? { backgroundColor: "rgb(189, 185, 185)" }
              : { backgroundColor: "rgb(106, 106, 106)" }
          }
        ></button>
      ))}
    </div>
  );
}

export default Pointer;
