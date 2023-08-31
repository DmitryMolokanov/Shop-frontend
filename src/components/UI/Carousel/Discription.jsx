import React from "react";

function Discription(props) {
  console.log(props);
  return (
    <div className="discription-block">
      <div className="discription-product">
        <h2>{props.products[`${props.index}`].name}</h2>
        <h2>{props.products[`${props.index}`].cost}</h2>
      </div>
      <button
        className="rightArrow"
        onClick={() => {
          let index = props.index;
          const moveIndex = index <= 3 ? index + 1 : (index = 0);
          props.slideRigth(moveIndex);
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default Discription;
