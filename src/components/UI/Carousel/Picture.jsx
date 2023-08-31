import React from "react";

function Picture(props) {
  return (
    <div className="img-block">
      <img
        src={props.products[`${props.index}`].img[0]}
        alt=""
        className="img"
      />
      <button
        className="leftArrow"
        onClick={() => {
          let index = props.index;
          const moveIndex = index >= 1 ? index - 1 : (index = 4);
          props.slideLeft(moveIndex);
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default Picture;
