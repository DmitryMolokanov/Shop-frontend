import React from "react";

function SelectQty() {
  return (
    <div className="order">
      Quantity:
      <select className="select-qty">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default SelectQty;
